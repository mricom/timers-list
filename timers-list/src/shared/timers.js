export class Timer{
  constructor(name, seconds){
    this.name = name;
    this.seconds = seconds;
  }
}

export const TIMERS = [
    new Timer("Timer 1", 5),
    new Timer("Timer 2", 3),
    new Timer("Timer 3", 4),
  ];