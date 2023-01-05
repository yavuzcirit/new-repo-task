import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookStore = createApi({
    reducerPath: 'bookStore',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://openlibrary.org/search?language=eng&author='}),
    endpoints: (builder) => ({
      getBooks: builder.query<any, string>({
        query: (id) => `OL${id}`,
      }),
    }),
  })

  export const { useGetBooksQuery } = bookStore