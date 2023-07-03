import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  name: '',
  region: '',
  services: [""],
  amountPaid: [""],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUserDetails: (state, action) => {
        const { name, region } = action.payload;
        state.name = name;
        state.region = region;
      },
    setService: (state, action) => {
      const {index, payload} = action.payload;
      const updatedServices = [...state.services];
      updatedServices[index] = payload;
      state.services = updatedServices;
    },
    setAmountPaid: (state, action) => {
      const {index, payload} = action.payload;
      const updatedAmountsPaid = [...state.amountPaid];
      updatedAmountsPaid[index] = payload;
      state.amountPaid = updatedAmountsPaid;
    },
    addService: (state) => {
      const expandedServices = [...state.services];
      expandedServices.push("");
      state.services=expandedServices;
      const expandedAmountsPaid = [...state.amountPaid];
      expandedAmountsPaid.push("");
      state.amountPaid = expandedAmountsPaid;
    }
  },
});

export const { setUserId, setUserDetails, setService, setAmountPaid, addService } = userSlice.actions;

export default userSlice.reducer;
