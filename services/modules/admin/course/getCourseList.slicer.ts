import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetCourseList } from "./getCourseList.service";
import {Course} from "@/types/types"

interface CourseState {
  loading: boolean;
  courses: Course[];
  total: number;
}

const initialState: CourseState = {
  loading: true,
  courses: [],
  total: 0
};

const adminCourseList = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetCourseList.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(GetCourseList.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      console.log(action.payload)
      state.courses = action.payload.courses
      state.total = action.payload.total_count
    });

    builder.addCase(GetCourseList.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default adminCourseList.reducer;