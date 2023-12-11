import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: "",
  name: "",
  phone: "",
  user_type: "",
  id: null
}

export const userSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.email = action.payload.email
      state.name = action.payload.name
      state.phone = action.payload.phone
      state.user_type = action.payload.user_type
      state.id = action.payload.id
    },
    unsetUserInfo: (state, action) => {
      state.email = action.payload.email
      state.name = action.payload.name
      state.phone = action.payload.phone
      state.user_type = action.payload.user_type
      state.id = action.payload.id
    },
  }
})

export const { setUserInfo, unsetUserInfo } = userSlice.actions

export default userSlice.reducer