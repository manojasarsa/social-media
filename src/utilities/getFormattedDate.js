export const getFormattedDate = (postDate) => {
    const dateOfPost = new Date(postDate);
    const currentTime = new Date();
    const milliSec = Math.floor(currentTime - dateOfPost);
    const sec = Math.floor(milliSec / 1000);
    if (sec > 59) {
        const min = Math.floor(sec / 60);
        if (min > 59) {
            const hours = Math.floor(min / 60);
            if (hours > 23) {
                const days = Math.floor(hours / 24);
                if (days > 30) {
                    const months = Math.floor(days / 30);
                    if (months > 11) {
                        return dateOfPost.toLocaleDateString("en-us", {
                            day: "numeric",
                            year: "numeric",
                            month: "short"
                        })
                    } else {
                        return `${months}mo ago`;
                    }
                } else {
                    return `${days}d ago`;
                }
            } else {
                return `${hours}h ago`;
            }
        } else {
            return `${min}min ago`;
        }
    } else {
        return `${sec}s ago`;
    }
};