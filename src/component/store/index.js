import {configureStore} from "@reduxjs/toolkit";
import auth from "./auth/auth"
const store = configureStore ({
    reducer : {
        //store
        auth
    }
})

export default store