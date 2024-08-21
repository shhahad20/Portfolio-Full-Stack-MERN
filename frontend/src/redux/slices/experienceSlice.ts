import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_URL } from '../../utils/api'

export type Experience = {
    _id: string
    title: string
    company: string
    date: string
    description: string
    source: string
    createdAt?: Date
    updatedAt?: Date
  }
  export type ExperienceState = {
    _experiences: Experience[]
    error: null | string
    isLoading: boolean
  }
  const initialState: ExperienceState = {
    _experiences: [],
    error: null,
    isLoading: false,
  }
  export const fetchExperienceData = createAsyncThunk(
    'experience/fetchExperienceData',
    async () => {
      try {
        const response = await axios.get(`${API_URL}/experiences`)
        console.log(response.data.payload)
        return response.data.payload
      } catch (error) {
        console.log(error)
      }
    }
  )
  export const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchExperienceData.pending, (state) => {
        state.isLoading = true
        state.error = null
    })
    .addCase(fetchExperienceData.fulfilled, (state, action) => {
        state.isLoading = false
        state._experiences = action.payload
    })
    .addCase(fetchExperienceData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
    })
    }
  })

  export default experienceSlice.reducer