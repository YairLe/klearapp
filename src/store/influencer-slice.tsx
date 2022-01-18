import { createSlice } from "@reduxjs/toolkit";
const influencerSlice = createSlice({
  name: "influencer",
  initialState: {
    name: "",
    selected: { lifestyle: false, beauty: false, food: false },
    brands: [] as string[],
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setSelected(state, action) {
      state.selected = {
        ...state.selected,
        [action.payload.name]: action.payload.value,
      };
    },
    setNewBrand(state, action) {
      state.brands.push(action.payload);
    },
  },
});

export default influencerSlice.reducer;

export const influencerActions = influencerSlice.actions;
