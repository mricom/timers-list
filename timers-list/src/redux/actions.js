export const ADD_TIMER = "ADD_TIMER";
export const DELETE_TIMER = "DELETE_TIMER";
export const SET_TIMER_MODAL_CREATE = "SET_TIMER_MODAL_CREATE";
export const SET_TIMER_MODAL_UPDATE = "SET_TIMER_MODAL_UPDATE";
export const CLOSE_TIMER_MODAL = "CLOSE_TIMER_MODAL";
export const EDIT_TIMER = "EDIT_TIMER";
export const SET_COUNTDOWN_TIMER = "SET_COUNTDOWN_TIMER";
export const RESET_COUNTDOWN_TIMER = "RESET_COUNTDOWN_TIMER"; 

export function addTimer(payload) {
  return {
    type: ADD_TIMER,
    payload,
  };
}

export function deleteTimer(payload) {
  return {
    type: DELETE_TIMER,
    payload,
  };
}

export function editTimer(payload) {
  return {
    type: EDIT_TIMER, 
    payload
  }
}

export function setTimerModalCreate(payload) {
  return {
    type: SET_TIMER_MODAL_CREATE,
    payload,
  };
}

export function setTimerModalUpdate(payload) {
  return {
    type: SET_TIMER_MODAL_UPDATE,
    payload,
  };
}

export function closeTimerModal(payload) {
  return {
    type: CLOSE_TIMER_MODAL,
    payload,
  };
}

export function setCountdownTimer(payload){
  return {
    type: SET_COUNTDOWN_TIMER,
    payload
  }
}

export function resetCountdownTimer(payload){
  return {
    type: RESET_COUNTDOWN_TIMER, 
    payload
  }
}