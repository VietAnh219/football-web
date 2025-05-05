import { useState, useEffect } from 'react';
import { ref, set, onValue } from 'firebase/database';
import { database } from '@/firebase';
import { MatchDataType } from '@/types/match';

const useLiveScore = (matchId?: number) => {
    const [elapsedTime, setElapsedTime] = useState(() => {
        const savedTime = localStorage.getItem(`elapsedTime_${matchId}`);
        return savedTime ? parseInt(savedTime, 10) : 0;
    });
    const [gameInProgress, setGameInProgress] = useState(true);
    const [matchData, setMatchData] = useState<MatchDataType | null>(null);
    const [addedTime1, setAddedTime1] = useState(() => {
        const savedTime1 = localStorage.getItem(`addedTime1_${matchId}`);
        return savedTime1 ? parseInt(savedTime1, 10) : 0;
    });
    const [addedTime2, setAddedTime2] = useState(() => {
        const savedTime2 = localStorage.getItem(`addedTime2_${matchId}`);
        return savedTime2 ? parseInt(savedTime2, 10) : 0;
    });
    const [phase, setPhase] = useState(() => {
        const savedPhase = localStorage.getItem(`phase_${matchId}`);
        return savedPhase || 'firstHalf';
    });

    const updateDataInFirebase = (data: MatchDataType) => {
        const matchRef = ref(database, `liveMatches/${matchId}`);
        set(matchRef, data);
    };

    useEffect(() => {
        const matchRef = ref(database, `liveMatches/${matchId}`);
        const unsubscribe = onValue(matchRef, (snapshot) => {
            if (snapshot.exists()) {
                setMatchData(snapshot.val());
            } else {
                setMatchData(null);
            }
        });
        return () => unsubscribe();
    }, [matchId]);

    useEffect(() => {
        if (matchData) {
            localStorage.setItem(`matchData_${matchId}`, JSON.stringify(matchData));
        }
    }, [matchData, matchId]);

    useEffect(() => {
        const savedMatchData = localStorage.getItem(`matchData_${matchId}`);
        if (savedMatchData) {
            setMatchData(JSON.parse(savedMatchData));
        }
    }, [matchId]);

    const getDisplayedTime = () => {
        const endFirstHalf = 45 + addedTime1;
        const startSecondHalf = endFirstHalf + 15;
        const endSecondHalf = startSecondHalf + 45;

        if (elapsedTime < 45) return elapsedTime;
        if (elapsedTime === 45 && phase === 'firstHalfAdded') return 45;
        if (elapsedTime > 45 && elapsedTime < endFirstHalf) return 45 + (elapsedTime - 45);
        if (elapsedTime >= endFirstHalf && elapsedTime < startSecondHalf) return 45 + addedTime1;
        if (elapsedTime >= startSecondHalf && elapsedTime < endSecondHalf) return 45 + (elapsedTime - 45 - addedTime1 - 15);
        if (elapsedTime >= endSecondHalf && elapsedTime < endSecondHalf + addedTime2) return 90 + addedTime1 + (elapsedTime - endSecondHalf);
        if (elapsedTime >= endSecondHalf + addedTime2) return 90 + addedTime1 + addedTime2;

        return elapsedTime;
    };

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;
        if (gameInProgress && matchData) {
            interval = setInterval(() => {
                setElapsedTime((prev) => {
                    const newTime = prev + 1;
                    const endFirstHalf = 45 + addedTime1;
                    const startSecondHalf = endFirstHalf + 15;
                    const endSecondHalf = startSecondHalf + 45;
                    const endMatch = endSecondHalf + addedTime2;

                    let currentPhase = phase;
                    if (newTime < 45) currentPhase = 'firstHalf';
                    else if (newTime === 45) { setPhase('firstHalfAdded'); currentPhase = 'firstHalfAdded'; }
                    else if (newTime > 45 && newTime < endFirstHalf) currentPhase = 'firstHalfAdded';
                    else if (newTime === endFirstHalf) { setPhase('halftime'); currentPhase = 'halftime'; }
                    else if (newTime > endFirstHalf && newTime < startSecondHalf) currentPhase = 'halftime';
                    else if (newTime === startSecondHalf) { setPhase('secondHalf'); currentPhase = 'secondHalf'; }
                    else if (newTime > startSecondHalf && newTime < endSecondHalf) currentPhase = 'secondHalf';
                    else if (newTime === endSecondHalf) { setPhase('secondHalfAdded'); currentPhase = 'secondHalfAdded'; }
                    else if (newTime > endSecondHalf && newTime < endMatch) currentPhase = 'secondHalfAdded';
                    else { setPhase('fullTime'); currentPhase = 'fullTime'; setGameInProgress(false); }

                    if (!matchData.home?.lineup || !matchData.away?.lineup) return newTime;

                    const updatedMatchData: MatchDataType = { ...matchData };

                    if (['firstHalf', 'secondHalf', 'firstHalfAdded', 'secondHalfAdded'].includes(currentPhase)) {
                        if (Math.random() < 0.02) {
                            const possessionInfluence = (updatedMatchData.home.statistic.possession - 50) / 200;
                            let baseChance = 0.5 + possessionInfluence;
                            baseChance = Math.min(Math.max(baseChance, 0.45), 0.55);
                            const isHome = Math.random() < baseChance;
                            const team = isHome ? 'home' : 'away';
                            const lineup = updatedMatchData[team].lineup;
                            const nonGKPlayers = lineup.filter(p => p.position !== 'Goalkeeper');

                            if (nonGKPlayers.length > 0) {
                                const scorer = nonGKPlayers[Math.floor(Math.random() * nonGKPlayers.length)];
                                const teamKey = isHome ? 'home' : 'away';
                                updatedMatchData.score.fullTime[teamKey]++;
                                if (!updatedMatchData.score?.goal[teamKey]) {
                                    updatedMatchData.score.goal[teamKey] = [];
                                }
                                if (updatedMatchData.score?.goal[teamKey].length === 1 && updatedMatchData.score.goal[teamKey][0].minute === 0) {
                                    updatedMatchData.score.goal[teamKey] = [];
                                }
                                updatedMatchData.score?.goal[teamKey].push({
                                    minute: getDisplayedTime(),
                                    name: scorer.name
                                });

                                updatedMatchData[teamKey].statistic.shoot++;
                                updatedMatchData[teamKey].statistic.shootOnTarget++;
                            }
                        }

                        ['shoot', 'corners', 'offside'].forEach(stat => {
                            let probability = 0.08;
                            if (stat === 'corners') probability = 0.04;
                            if (stat === 'offside') probability = 0.03;

                            if (Math.random() < probability) {
                                const isHome = Math.random() < (updatedMatchData.home.statistic.possession / 100);
                                const side = isHome ? 'home' : 'away';

                                if (stat === 'shoot') {
                                    updatedMatchData[side].statistic.shoot++;

                                    if (Math.random() < 0.35) {
                                        updatedMatchData[side].statistic.shootOnTarget++;
                                    }

                                    if (updatedMatchData[side].statistic.shoot < updatedMatchData[side].statistic.shootOnTarget) {
                                        updatedMatchData[side].statistic.shoot = updatedMatchData[side].statistic.shootOnTarget;
                                    }
                                } else {
                                    updatedMatchData[side].statistic[stat as keyof typeof updatedMatchData.home.statistic]++
                                }
                            }
                        });

                        const possessionBias = 50 - updatedMatchData.home.statistic.possession;
                        const possessionChange = possessionBias * 0.02 + (Math.random() - 0.5) * 1.5;
                        const newHomePossession = Math.min(60, Math.max(40, updatedMatchData.home.statistic.possession + possessionChange));
                        updatedMatchData.home.statistic.possession = Math.round(newHomePossession);
                        updatedMatchData.away.statistic.possession = 100 - updatedMatchData.home.statistic.possession;

                        if (Math.random() < 0.025) {
                            const isHome = Math.random() < 0.5;
                            const side = isHome ? 'home' : 'away';
                            updatedMatchData[side].statistic.yellowCard++;
                        }

                        if (Math.random() < 0.001) {
                            const isHome = Math.random() < 0.5;
                            const side = isHome ? 'home' : 'away';
                            if (updatedMatchData[side].statistic.redCard < 1) {
                                updatedMatchData[side].statistic.redCard++;
                            }
                        }

                        (['home', 'away'] as const).forEach((side) => {
                            const stats = updatedMatchData[side].statistic;
                            const goals = updatedMatchData.score?.fullTime[side] || 0;
                            if (stats.shootOnTarget < goals) stats.shootOnTarget = goals;
                            if (stats.shoot < stats.shootOnTarget) stats.shoot = stats.shootOnTarget;
                        });

                        // Update chart data
                        const currentTime = getDisplayedTime();
                        const homeTeamName = updatedMatchData.home.shortName;
                        const awayTeamName = updatedMatchData.away.shortName;

                        if (!updatedMatchData.chart) {
                            updatedMatchData.chart = {
                                shoot: [],
                                ball_possession: [],
                                corner: []
                            };
                        }
                        if (!updatedMatchData.chart.shoot) updatedMatchData.chart.shoot = [];
                        if (!updatedMatchData.chart.ball_possession) updatedMatchData.chart.ball_possession = [];
                        if (!updatedMatchData.chart.corner) updatedMatchData.chart.corner = [];

                        // Add data points for shoot, ball_possession, and corner every minute
                        if (currentTime > (updatedMatchData.chart.shoot.slice(-1)[0]?.minute || 0)) {
                            updatedMatchData.chart.shoot.push({
                                minute: currentTime,
                                [homeTeamName]: updatedMatchData.home.statistic.shoot,
                                [awayTeamName]: updatedMatchData.away.statistic.shoot,
                            });
                            updatedMatchData.chart.ball_possession.push({
                                minute: currentTime,
                                [homeTeamName]: updatedMatchData.home.statistic.possession,
                                [awayTeamName]: updatedMatchData.away.statistic.possession,
                            });
                            updatedMatchData.chart.corner.push({
                                minute: currentTime,
                                [homeTeamName]: updatedMatchData.home.statistic.corners,
                                [awayTeamName]: updatedMatchData.away.statistic.corners,
                            });
                        }
                    }

                    updatedMatchData.matchTime = getDisplayedTime();
                    updatedMatchData.phase = currentPhase;
                    updateDataInFirebase(updatedMatchData);

                    localStorage.setItem(`elapsedTime_${matchId}`, newTime.toString());
                    localStorage.setItem(`phase_${matchId}`, currentPhase);
                    localStorage.setItem(`addedTime1_${matchId}`, addedTime1.toString());
                    localStorage.setItem(`addedTime2_${matchId}`, addedTime2.toString());

                    return newTime;
                });
            }, 600); // Update every second
        } else if (!gameInProgress && matchData && matchData.phase !== 'fullTime') {
            const finalMatchData = { ...matchData, matchTime: getDisplayedTime(), phase: 'fullTime' };
            updateDataInFirebase(finalMatchData);
            localStorage.setItem(`matchData_${matchId}`, JSON.stringify(finalMatchData));
            clearInterval(interval);
        }

        return () => clearInterval(interval as NodeJS.Timeout);
    }, [gameInProgress, phase, addedTime1, addedTime2, matchData, matchId]);

    useEffect(() => {
        if (elapsedTime === 45 && phase === 'firstHalf') setAddedTime1(Math.floor(Math.random() * 3) + 1);
        if (elapsedTime === 90 && phase === 'secondHalf') setAddedTime2(Math.floor(Math.random() * 5) + 2);
    }, [elapsedTime, phase]);

    return { matchData, elapsedTime, phase };
};

export default useLiveScore;
