import { createSlice } from "@reduxjs/toolkit";


const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = { ...action.payload }
        },
    },
    extraReducers: []

})

export const cardsSelector = (state) => state.cards.cards
export const {
    addCard
    // addQuizId
} = cardsSlice.actions

export default cardsSlice.reducer