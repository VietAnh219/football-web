export const getAbsoluteUrl = (url?: string): string | undefined => {
    if (!url) {
        return undefined;
    }
    // Kiểm tra xem URL đã có http:// hoặc https:// chưa
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    // Nếu chưa có, mặc định thêm https://
    return `https://${url}`;
}