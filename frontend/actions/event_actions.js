import * as EventApiUtil from '../util/event_api_util';
export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';

// REGULAR ACTIONS
export const receiveAllEvents = (events) => {
    // debugger;
    return {
        type: RECEIVE_ALL_EVENTS,
        events
    }
};

export const receiveEvent = (event) => {
    return {
        type: RECEIVE_EVENT,
        event
    }
};

export const deleteEvent = (eventId) => {
    return {
        type: DELETE_EVENT,
        eventId
    }
};

export const receiveEventErrors = (errors) => {
    return {
        type: RECEIVE_EVENT_ERRORS,
        errors //this will be a response JSON / errors array
    }
};



// THUNK ACTION CREATORS

export const fetchEvents = () => dispatch => {
    return EventApiUtil.fetchEvents()
        .then((events) => dispatch(receiveAllEvents(events)))
};

export const fetchEvent = (eventId) => (dispatch) => {
    return EventApiUtil.fetchEvent(eventId)
        .then(event => dispatch(receiveEvent(event)))
};



export const createEvent = (event) => () => {
    return EventApiUtil.createEvent(event)
        .then(event => dispatch(receiveEvent(event))),
            errors => dispatch(receiveEventErrors(errors.responseJSON))
}

export const updateEvent = (event) => (dispatch) => {
    return EventApiUtil.updateEvent(event)
        .then(event => dispatch(receiveEvent(event))),
            errors => dispatch(receiveEventErrors(errors.responseJSON))
        //.then(successcallbackarg1, failcallbackarg2)
};

export const destroyEvent = (eventId) => (dispatch) => {
    return EventApiUtil.destroyEvent(eventId)
        .then(() => dispatch(deleteEvent(eventId)))
};