import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from "./DummyData";

export const postsSlice = createSlice({
  name: "posts",
  initialState: { value: PostsData },
  reducers: {
    addPost: (state, action) => {
      state.value.push(action.payload);
      /*payloadはデータのことを指している。データをpost dataという配列にPushしていくという意味*/
      /*addPost is Action creater in the slice*/
    },
    deletePost: (state, action) => {
      state.value = state.value.filter((post) => post.id !== action.payload.id);
    },
  },
});

export const { addPost, deletePost} = postsSlice.actions;
export default postsSlice.reducer;
