import { TIMERS } from "../shared/timers";
import {
  ADD_TIMER,
  CLOSE_TIMER_MODAL,
  DELETE_TIMER,
  SET_TIMER_MODAL_CREATE,
  SET_TIMER_MODAL_UPDATE,
  EDIT_TIMER,
  SET_COUNTDOWN_TIMER,
  RESET_COUNTDOWN_TIMER
} from "./actions";
import { combineReducers } from "redux";
import { formatTime } from "../shared/utils";

export const initialTimersState = TIMERS;

export const initialTimerModalState = {
  isOpen: false,
  isCreationModal: true,
  updatingTimerIndex: null,
};

export const initialCountdownTimerState = {
  selectedTimer: {},
};

export const timersReducer = (prevState = initialTimersState, action) => {
  let timers = [...prevState];
  let newTimer = {};
  switch (action.type) {
    case DELETE_TIMER:
      timers.splice(action.payload.timerIndex, 1);
      return timers;
    case ADD_TIMER:
      newTimer = formatTime(
        action.payload.hours,
        action.payload.minutes,
        action.payload.seconds
      );
      timers.push({ name: action.payload.name, ...newTimer });
      return timers;
    case EDIT_TIMER:
      newTimer = formatTime(
        action.payload.hours,
        action.payload.minutes,
        action.payload.seconds
      );
      timers[action.payload.index] = { name: action.payload.name, ...newTimer };
      return timers;
    default:
      return prevState;
  }
};

export const timerModalReducer = (
  prevState = initialTimerModalState,
  action
) => {
  switch (action.type) {
    case SET_TIMER_MODAL_UPDATE:
      return {
        ...prevState,
        isCreationModal: false,
        isOpen: true,
        updatingTimerIndex: action.payload.timerIndex,
      };
    case CLOSE_TIMER_MODAL:
      return {
        ...initialTimerModalState,
      };
    case SET_TIMER_MODAL_CREATE:
      return {
        ...prevState,
        isCreationModal: true,
        isOpen: true,
      };
    default:
      return prevState;
  }
};

export const countdownTimerReducer = (
  prevState = initialCountdownTimerState,
  action
) => {
  switch (action.type) {
    case SET_COUNTDOWN_TIMER:
      return {
        ...prevState,
        selectedTimer: {
          name: action.payload.name,
          index: action.payload.index,
        },
      };
    
    case RESET_COUNTDOWN_TIMER: 
      return {
        ...initialCountdownTimerState,
      }

    default:
      return prevState;
  }
};

export const mainReducer = combineReducers({
  timers: timersReducer,
  timerModal: timerModalReducer,
  countdownTimer: countdownTimerReducer,
});
