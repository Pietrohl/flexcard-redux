import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "../features/cards/cards.slice";
import quizzesSlice from "../features/quizzes/quizzes.slice";
import topicsReducer from '../features/topics/topics.slice'

export default configureStore({
  reducer: { topics: topicsReducer, quizzes: quizzesSlice , cards: cardsSlice},
});
