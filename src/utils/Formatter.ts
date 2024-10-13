export const Formatter = () => {
    const formatDate = (date: Date) => {
        return date.toLocaleDateString('ko-KR', {year: 'numeric', month: 'long', day: 'numeric'});
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('ko-KR', {hour: '2-digit', minute: '2-digit', hour12: false});
    };

    return {formatDate, formatTime}
}