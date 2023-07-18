import { createSlice} from "@reduxjs/toolkit"


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },

    reducers:{
          addCart:(state,action)=>{  //reducer function
               state.items.push(action.payload) //add - push
          },
          clearCart:(state,action)=>{
                  state.items=[] //clear - remove
          } 
    }
})

// export actions
export const {addCart,clearCart}=cartSlice.actions;  //destructing export

//export reducer
export default cartSlice.reducer;

