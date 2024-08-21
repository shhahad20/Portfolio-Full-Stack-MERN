import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_URL } from '../../utils/api'

export type Education = {
    _id: string
    title: string
    school: string
    date: string
    description: string
    createdAt?: Date
    updatedAt?: Date
  }
  export type EducationState = {
    _education: Education[]
    error: null | string
    isLoading: boolean
  }
  const initialState: EducationState = {
    _education: [],
    error: null,
    isLoading: false,
  }
  export const fetchEducationData = createAsyncThunk(
    'education/fetchEducationData',
    async () => {
      try {
        const response = await axios.get(`${API_URL}/education`)
        console.log(response.data.payload)
        return response.data.payload
      } catch (error) {
        console.log(error)
      }
    }
  )
  export const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchEducationData.pending, (state) => {
        state.isLoading = true
        state.error = null
    })
    .addCase(fetchEducationData.fulfilled, (state, action) => {
        state.isLoading = false
        state._education = action.payload
        console.log(state._education)
    })
    .addCase(fetchEducationData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
    })
    }
  })

  export default educationSlice.reducer