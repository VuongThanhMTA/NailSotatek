
let initialState = [
    {
        id: 0,
        add: "Nail Everly 29",
        time: "9:00",
        day: "30/04/2019"
    },
    {
        id: 1,
        add: "Nail Everly 29",
        time: "11:00",
        day: "30/04/2019"
    },
    {
        id: 2,
        add: "Nail Everly 29",
        time: "10:00",
        day: "30/04/2019"
    }
]
const bookingReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_BOOKING':
            return [...state, action.payload]
        case 'REMOVE_BOOKING':
            console.log("remove " + action.payload)
            return state.filter(booking => booking.id !== action.payload.id)
    }
    return state;
}

export default bookingReducer;