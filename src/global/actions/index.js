import { ADD_BOOKING, REMOVE_BOOKING } from "./ActionType";


export const addBooking = (booking) => ({
    type: ADD_BOOKING,
    payload: booking
});

export const removeBooking = (booking) => ({
    type: REMOVE_BOOKING,
    payload: booking
})