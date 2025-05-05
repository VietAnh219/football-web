export const formatUTCDate = (utcDate: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        timeZone: "UTC"
    };

    const date = new Date(utcDate);

    return date.toLocaleDateString("en-GB", options);
}

