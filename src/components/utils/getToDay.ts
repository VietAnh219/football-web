export const getTodayDateString = (): string => {
    const today = new Date();
    const day = today.getDay();
    const Today = new Date(today);
    today.setDate(today.getDate() + day);
    today.setHours(0, 0, 0, 0);

    const year = today.getUTCFullYear();
    const month = String(Today.getUTCMonth() + 1).padStart(2, '0');
    const date = String(Today.getUTCDate()).padStart(2, '0');

    return `${year}-${month}-${date}`;
};