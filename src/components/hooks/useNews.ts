import { useQuery } from "@tanstack/react-query";
import { db } from '@/firebase';
import { doc, getDoc } from "firebase/firestore";
import { News } from "@/types/news";

const fetchNewFromFirestore = async (newsCode: string): Promise<News[] | null> => {
    if (!db) throw new Error("Firestore DB is not initialized.");
    if (!newsCode) {
        console.warn("news code is required to fetch standings.");
        return null;
    }

    const newsDocRef = doc(db, "news", newsCode);
    const newsSnap = await getDoc(newsDocRef);

    if (!newsSnap.exists()) {
        console.log(`No news found for news code: ${newsCode}`);
        return null;
    }

    const newsData = newsSnap.data();

    const articles = newsData.articles as News[];

    return articles;
}

export const useNews = (news: string) => {
    return useQuery({
        queryKey: ['news', news],
        queryFn: () => fetchNewFromFirestore(news),
        staleTime: 1000 * 60 * 5,
        enabled: !!news && !!db,
    });
};