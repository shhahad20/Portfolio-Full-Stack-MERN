import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchExperienceData } from "../redux/slices/experienceSlice";
import { RootState } from "../redux/store";


type FeatchExperiencePendingAction = ReturnType<typeof fetchExperienceData.pending>;
type FeatchExperienceFulfilledAction = ReturnType<typeof fetchExperienceData.fulfilled>;
type FeatchExperienceErrorAction = ReturnType<typeof fetchExperienceData.rejected>;

export type ExperienceAction =
  |FeatchExperiencePendingAction
  |FeatchExperienceFulfilledAction
  |FeatchExperienceErrorAction;

export type ExperienceDispatch = ThunkDispatch<RootState, void, ExperienceAction>;
