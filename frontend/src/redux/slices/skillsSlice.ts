import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_URL } from '../../utils/api'

export type Skill = {
    _id: string
    title: string
    description: string
    image: File | undefined | string
    createdAt?: Date
    updatedAt?: Date
  }
  export type SkillState = {
    _skills: Skill[]
    error: null | string
    isLoading: boolean
  }
  const initialState: SkillState = {
    _skills: [],
    error: null,
    isLoading: false,
  }
  export const fetchSkillData = createAsyncThunk(
    'skill/fetchSkillData',
    async () => {
      try {
        const response = await axios.get(`${API_URL}/skills`)
        console.log(response.data.payload)
        return response.data.payload
      } catch (error) {
        console.log(error)
      }
    }
  )
  export const skillSlice = createSlice({
    name: 'skill',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchSkillData.pending, (state) => {
        state.isLoading = true
        state.error = null
    })
    .addCase(fetchSkillData.fulfilled, (state, action) => {
        state.isLoading = false
        state._skills = action.payload
        console.log(state._skills)
    })
    .addCase(fetchSkillData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
    })
    }
  })

  export default skillSlice.reducer