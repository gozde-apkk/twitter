import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  modal : false
  
}

const modal = createSlice ({
    name : 'modal',
    initialState,
    reducers : {
        //state manipula methods
        _setModal : (state , action) => {
            state.modal = action.payload
        },
        _removeModal : (state , action) => {
          state.modal = false
        }
    }
})


export const {_setModal , _removeModal , _setCurrentAccount} = modal.actions
export default modal.reducer