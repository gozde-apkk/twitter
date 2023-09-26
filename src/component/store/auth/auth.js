import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentAccount : {
        id:1,
        username : 'Gozdeapak',
        fullname : 'Gözde Apak',
        avatar  : "https://pbs.twimg.com/profile_images/1340430144650039296/en7Jz3kF_400x400.jpg"
    },
     accounts : [
        {
            id:1,
            username : 'Gozdeapak',
            fullname : 'Gözde Apak',
            avatar  : "https://pbs.twimg.com/profile_images/1340430144650039296/en7Jz3kF_400x400.jpg"
        },{
            id:2,
            username : 'Gozde',
            fullname : 'Gözde',
            avatar  : "https://pbs.twimg.com/profile_images/1340430144650039296/en7Jz3kF_400x400.jpg"
        },
     ]
}

const auth = createSlice ({
    name : 'auth',
    initialState,
    reducers : {
        //state manipula methods
        _addAccount : (state , action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount : (state , action) => {
            state.accounts = state.accounts.filter (account => account.id !== action.payload )
            if(state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount : (state , action) => {
            state.currentAccount = action.payload
        }
    }
})


export const {_addAccount , _removeAccount , _setCurrentAccount} = auth.actions
export default auth.reducer