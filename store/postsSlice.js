import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  status: 'idle',
  error: null
}


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get('/fakeApi/posts')
    return response.data
  })
  
  const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      // omit existing reducers here
    },
    extraReducers(builder) {
      builder
        .addCase(fetchPosts.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
          state.status = 'succeeded'
          // Add any fetched posts to the array
          state.posts = state.posts.concat(action.payload)
        })
        .addCase(fetchPosts.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }
  })