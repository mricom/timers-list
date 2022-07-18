export const formatTime = (hrs, mins, secs) => {
    let seconds = Number(secs) % 60; 
    let minutes = (Number(mins) + Math.floor(Number(secs)/60)) % 60;
    let hours = (Number(hrs) + Math.floor(Number(mins)/60));
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

