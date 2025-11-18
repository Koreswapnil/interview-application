import { QUIZ_URL } from '../../constants';
import { apiSlice } from './apiSlice';

export const quizApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizs: builder.query({
      query: () => ({
        url: QUIZ_URL,
      }),
      providesTags: ['QuizSet'],
      keepUnusedDataFor: 5,
    }),
    getQuizArray: builder.query({
      query: (id) => ({
        url: `${QUIZ_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetQuizsQuery, useGetQuizArrayQuery } = quizApiSlice;
