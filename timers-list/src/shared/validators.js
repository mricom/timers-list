export const required = (val) =>
  val !== "" && val !== null && val !== undefined
    ? undefined
    : "Required field.\n";
export const minValue = (minVal) => (val) =>
  !isNaN(val) && val >= minVal
    ? undefined
    : `Should be greater or equal to ${minVal}.\n`;
export const validName = (val) =>
  /\w+/.test(val) ? undefined : "Should contain alphanumeric characters.\n";
export const validTime = (val) =>
  val.hours > 0 || val.minutes > 0 || val.seconds > 0;
export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
