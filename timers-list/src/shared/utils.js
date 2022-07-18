export const formatTime = (hrs, mins, secs) => {
    let seconds = secs % 60; 
    let minutes = (mins + Math.floor(secs/60)) % 60;
    let hours = (hrs + Math.floor(mins/60));
    return {
        hours, 
        minutes, 
        seconds
    }
}

export const formatTimeString =  (hours, minutes, seconds) => {
    let secondsStr = seconds>=10 ? `${seconds}` : `0${seconds}`;
    let minutesStr = minutes>=10 ? `${minutes}` : `0${minutes}`;
    let hoursStr = hours>=10 ? `${hours}` : `0${hours}`;
    return `${hoursStr}:${minutesStr}:${secondsStr}`;
}

