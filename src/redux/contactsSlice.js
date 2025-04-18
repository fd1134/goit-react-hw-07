import { createSlice } from "@reduxjs/toolkit";
import {fetchContacts,addContact,deleteContact} from './contactsOps'

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  extraReducers:(builder)=>{
    builder
    .addCase(fetchContacts.pending,(state) => {
      state.loading = true;
      state.error = null;
      
    })
    .addCase(fetchContacts.fulfilled,(state, action) => {
      state.loading = true;
      state.error = null;
      state.items=action.payload
    })
    .addCase(fetchContacts.rejected,(state, action) => {
      state.loading = false;
      state.error = action.payload;
    
    })
    .addCase(addContact.pending,(state) => {
      state.loading = true;
      state.error = null;
      
    })
    .addCase(addContact.fulfilled,(state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
    })
    .addCase(addContact.rejected,(state, action) => {
      state.loading = false;
      state.error = action.payload;
    
    })
    .addCase(deleteContact.pending,(state) => {
      state.loading = true;
      state.error = null;
      
    })
    .addCase(deleteContact.fulfilled,(state, action) => {
        state.loading = false;
        state.error = null;
        state.items=state.items.filter(item=>item.id!=action.payload.id);
    })
    .addCase(deleteContact.rejected,(state, action) => {
      state.loading = false;
      state.error = action.payload;
    
    })
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});



export default slice.reducer;
