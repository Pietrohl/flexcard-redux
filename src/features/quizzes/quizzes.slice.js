import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from '../topics/topics.slice'

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = { ...action.payload }
        }
    },
    extraReducers: []

})


export const addQuizThunk = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId({
            id: payload.id,
            topicId: payload.topicId
        }));
    };
};


export const quizzesSelector = (state) => state.quizzes.quizzes
export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer