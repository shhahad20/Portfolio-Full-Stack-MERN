import { configureStore } from "@reduxjs/toolkit"
import experienceSlice from "./slices/experienceSlice"
import educationSlice  from "./slices/edcuationSlice"
import  skillSlice  from "./slices/skillsSlice"


export const store = configureStore({
    reducer: {
      experienceReducer: experienceSlice,
      educationReducer: educationSlice,
      skillReducer: skillSlice,

    }
  })
  
  export type RootState = {
    experienceReducer: ReturnType<typeof experienceSlice>
    educationReducer: ReturnType<typeof educationSlice>
    skillReducer: ReturnType<typeof skillSlice>
  }
  export type AppDispatch = typeof store.dispatch