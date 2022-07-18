import { TIMERS } from "../shared/timers";
import {
  ADD_TIMER,
  CLOSE_TIMER_MODAL,
  DELETE_TIMER,
  SET_TIMER_MODAL_CREATE,
  SET_TIMER_MODAL_UPDATE,
} from "./actions";

export const initialState = {
  timers: TIMERS,
  timerModal: {
    isOpen: false,
    isCreationModal: true,
    updatingTimerIndex: null,
  },
};

export const timers = (prevState = initialState, action) => {
  switch (action.type) {
    case DELETE_TIMER:
      const timers = [...prevState.timers];
      timers.splice(action.payload.timerIndex, 1);
      return { ...prevState, timers };
    case ADD_TIMER:
      return {
        ...prevState,
        timers: [
          ...prevState.timers,
          {
            name: action.payload.name,
            hours: action.payload.hours,
            minutes: action.payload.minutes,
            seconds: action.payload.seconds,
          },
        ],
      };
    case SET_TIMER_MODAL_CREATE:
      return {
        ...prevState,
        timerModal: { ...prevState.timerModal, isCreationModal: true, isOpen: true },
      };
    case SET_TIMER_MODAL_UPDATE:
      return {
        ...prevState,
        timerModal: {
          ...prevState.timerModal,
          isCreationModal: false,
          isOpen: true,
          updatingTimerIndex: action.payload.timerIndex,
        },
      };
    case CLOSE_TIMER_MODAL: 
      return {
        ...prevState, 
        timerModal: {
          ...prevState.timerModal, 
          isCreationModal: true, 
          isOpen: false, 
          updatingTimerIndex: null,
        }
      }
    default:
      return prevState;
  }
};
