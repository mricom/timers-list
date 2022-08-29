export const formatTimeSimple = (hrs, mins, secs) => {
  let seconds = Number(secs) + Number(mins) * 60 + Number(hrs) * 3600;
  return seconds;
};

export const formatTimeExtended = (secs) => {
  let hours = Math.floor(secs / 3600) || 0;
  let minutes = Math.floor((secs - 3600 * hours) / 60) || 0;
  let seconds = secs % 60 || 0;
  return { hours, minutes, seconds };
};

export const formatTimeString = (initSeconds) => {
  let hours = Math.floor(initSeconds / 3600) || 0;
  let minutes = Math.floor((initSeconds - 3600 * hours) / 60) || 0;
  let seconds = initSeconds % 60 || 0;
  let hoursStr = hours >= 10 ? `${hours}` : `0${hours}`;
  let minutesStr = minutes >= 10 ? `${minutes}` : `0${minutes}`;
  let secondsStr = seconds >= 10 ? `${seconds}` : `0${seconds}`;
  return `${hoursStr}:${minutesStr}:${secondsStr}`;
};
