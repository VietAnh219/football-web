export const formatUTCTime = (utcDate: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "UTC"
    };
    return new Date(utcDate).toLocaleTimeString("en-GB", options);
}