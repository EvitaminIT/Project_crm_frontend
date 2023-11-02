const { createSlice,nanoid,createAsyncThunk } = require("@reduxjs/toolkit");
import { Login,Login2 } from "./API_Actions";
import { LOGIN_REQUEST,LOGIN_SUCCESS } from "./Constant/Auth_constant";


const intialstate= (state,action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { loading: true }
        case LOGIN_SUCCESS:
            toast.success('Login Success')
            return { type: action.payload.type, accessToken: action.payload.Token.access, userDetail:action.payload.user_details, Login: true }
        case AUTH_ERROR:
            toast.error(action.payload.message)
            // return state;
            return {state: state, Login: false}
        case AUTH_LOGOUT:
            return { accessToken: null }
        default:
            return state
    }
};

const Reducer = (state = intialstate, action) => {
    console.log(action,)
    switch (action.type) {
        case LOGIN_REQUEST:
            return { loading: true }
        case LOGIN_SUCCESS:
            toast.success('Login Success')
            return { type: action.payload.type, accessToken: action.payload.Token.access, userDetail:action.payload.user_details, Login: true }
        case AUTH_ERROR:
            toast.error(action.payload.message)
            // return state;
            return {state: state, Login: false}
        case AUTH_LOGOUT:
            return { accessToken: null }
        default:
            return state
    }
}



export const postApiData = createAsyncThunk('myReducer/postApiData', async (data) => {
    return Login(data)
  });
  
  // Create a slice to manage the state
  const myReducer = createSlice({
    name: 'myReducer',
    intialstate,
    Reducer,
  });
  
  export default myReducer.reducer;


// const Slice = createSlice({
//     name:"login",
//     intialstate,
//     reducers:{
//         login:(state,actions)=>{
//           console.log(actions)
//         }
//     }
// })


// export const { login } = Slice.actions

// export default Slice.reducer