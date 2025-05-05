import { useClubs } from "@/components/hooks/useClubs";

export const useAllClubs = () => {
    const { data: plClubs, isLoading: loadingPL } = useClubs("PL");
    const { data: clClubs, isLoading: loadingCL } = useClubs("CL");
    const { data: laligaClubs, isLoading: loadingLL } = useClubs("LL");
    const { data: ligue1Clubs, isLoading: loadingL1 } = useClubs("LL");
    const { data: serieAClubs, isLoading: loadingSA } = useClubs("SA");

    const allClubs = [
        ...(plClubs?.clubs || []),
        ...(clClubs?.clubs || []),
        ...(ligue1Clubs?.clubs || []),
        ...(laligaClubs?.clubs || []),
        ...(serieAClubs?.clubs || []),
    ];

    const uniqueClubs = Array.from(
        new Map(allClubs.map(club => [club.id, club])).values()
    );

    const isLoading = loadingPL || loadingCL || loadingLL || loadingSA || loadingL1;

    return { allClubs: uniqueClubs, isLoading };
};
