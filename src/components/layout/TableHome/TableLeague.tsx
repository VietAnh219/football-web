import { useThemeStore } from "@/components/hooks/useDarkMode";
import { getBackgroundColor } from "@/components/utils/getBgStading";
import { StandingTableItem } from "@/types/stading";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Box, Avatar,
} from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { GoXCircleFill } from "react-icons/go";

const TableLeague = ({ table, league }: { table: StandingTableItem[], league: string }) => {
    const isDark = useThemeStore((state) => state.theme === "dark");

    return (
        <Box
            sx={{
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid #e0e0e0",
                fontFamily: 'Montserrat, sans-serif',
            }}
        >
            <TableContainer
                sx={{
                    height: "100%",
                    overflowY: table.length > 7 ? "auto" : "hidden",
                    backgroundColor: isDark ? "#121212" : "#ffffff"
                }}
            >
                <Table stickyHeader>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: isDark ? "#1B1C21" : "#fff", boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }}>
                            <TableCell align="center" sx={{ backgroundColor: isDark ? "#1B1C21" : "#fff", color: isDark ? "#fff" : "#000", fontFamily: 'Montserrat, sans-serif' }}>#</TableCell>
                            <TableCell sx={{ backgroundColor: isDark ? "#1B1C21" : "#fff", color: isDark ? "#fff" : "#000", fontFamily: 'Montserrat, sans-serif' }}>Team</TableCell>
                            <TableCell sx={{ backgroundColor: isDark ? "#1B1C21" : "#fff", color: isDark ? "#fff" : "#000", fontFamily: 'Montserrat, sans-serif' }} align="center">W</TableCell>
                            <TableCell sx={{ backgroundColor: isDark ? "#1B1C21" : "#fff", color: isDark ? "#fff" : "#000", fontFamily: 'Montserrat, sans-serif' }} align="center">D</TableCell>
                            <TableCell sx={{ backgroundColor: isDark ? "#1B1C21" : "#fff", color: isDark ? "#fff" : "#000", fontFamily: 'Montserrat, sans-serif' }} align="center">L</TableCell>
                            <TableCell sx={{ backgroundColor: isDark ? "#1B1C21" : "#fff", color: isDark ? "#fff" : "#000", fontFamily: 'Montserrat, sans-serif' }} align="center">GF</TableCell>
                            <TableCell sx={{ backgroundColor: isDark ? "#1B1C21" : "#fff", color: isDark ? "#fff" : "#000", fontFamily: 'Montserrat, sans-serif' }} align="center">GA</TableCell>
                            <TableCell sx={{ backgroundColor: isDark ? "#1B1C21" : "#fff", color: isDark ? "#fff" : "#000", fontFamily: 'Montserrat, sans-serif' }} align="center">GD</TableCell>
                            <TableCell sx={{ backgroundColor: isDark ? "#1B1C21" : "#fff", color: isDark ? "#fff" : "#000", fontFamily: 'Montserrat, sans-serif' }} align="center">Points</TableCell>
                            <TableCell sx={{ backgroundColor: isDark ? "#1B1C21" : "#fff", color: isDark ? "#fff" : "#000", fontFamily: 'Montserrat, sans-serif' }} align="center">Last Match</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {table.map((team) => (
                            <TableRow
                                key={team.position}
                                sx={{
                                    backgroundColor: getBackgroundColor(team.position, league, isDark)
                                }}
                            >
                                <TableCell align="center" sx={{ fontWeight: 600, color: isDark ? "#fff" : "#000", fontSize: "16px", fontFamily: 'Montserrat, sans-serif' }}>
                                    {team.position}
                                </TableCell>
                                <TableCell sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: "16px", color: isDark ? "#fff" : "#000", fontFamily: 'Montserrat, sans-serif' }}>
                                    <Avatar src={team.team.crest} sx={{ width: 32, height: 32, fontFamily: 'Montserrat, sans-serif' }} />
                                    {team.team.shortName}
                                </TableCell>
                                <TableCell align="center" sx={{ fontSize: "16px", color: isDark ? "#fff" : "#000", fontFamily: 'Montserrat, sans-serif' }}>{team.won}</TableCell>
                                <TableCell align="center" sx={{ fontSize: "16px", color: isDark ? "#fff" : "#000", fontFamily: 'Montserrat, sans-serif' }}>{team.draw}</TableCell>
                                <TableCell align="center" sx={{ fontSize: "16px", color: isDark ? "#fff" : "#000", fontFamily: 'Montserrat, sans-serif' }}>{team.lost}</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", color: isDark ? "#fff" : "#000", fontSize: "16px", fontFamily: 'Montserrat, sans-serif' }}>
                                    {team.goalsFor}
                                </TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "16px", color: isDark ? "#fff" : "#000", fontFamily: 'Montserrat, sans-serif' }}>
                                    {team.goalsAgainst}
                                </TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "16px", color: isDark ? "#fff" : "#000", fontFamily: 'Montserrat, sans-serif' }}>
                                    {team.goalDifference}
                                </TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "16px", color: isDark ? "#fff" : "#000", fontFamily: 'Montserrat, sans-serif' }}>
                                    {team.points}
                                </TableCell>
                                <TableCell align="center" sx={{ p: 1 }}>
                                    <Box display="flex" justifyContent="center" alignItems="center" gap={1} height={32}>
                                        {team.form?.map((res, i) => (
                                            <Box key={i} display="flex" alignItems="center" justifyContent="center">
                                                {res === "W" ? (
                                                    <FaCheckCircle style={{ color: "#24A700", width: 20, height: 20 }} />
                                                ) : res === "L" ? (
                                                    <GoXCircleFill style={{ color: "#FF0000", width: 20, height: 20 }} />

                                                ) : (
                                                    <FaCircleMinus style={{ color: "#838383", width: 20, height: 20 }} />
                                                )}
                                            </Box>
                                        ))}
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    )
}

export default TableLeague