import { apiSlice } from './apiSlice';

export const answersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Save or update answers for a test
    saveAnswers: builder.mutation({
      query: (data) => ({
        url: '/api/answers',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Answers'],
    }),

    // Get all answers for the logged-in user
    getUserAnswers: builder.query({
      query: (test) => ({
        url: test ? `/api/answers?test=${test}` : '/api/answers',
      }),
      providesTags: ['Answers'],
    }),
  }),
});

export const { useSaveAnswersMutation, useGetUserAnswersQuery } =
  answersApiSlice;
