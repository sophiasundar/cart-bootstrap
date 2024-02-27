import { createSlice} from "@reduxjs/toolkit"


const cartSlice=createSlice({
    // name
    // state
    // reducers
    name:"cart",
    initialState:{
        items:["phone",'laptop','3']
    },
      
    // use reducers plural
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

//export reducer only not reducers
export default cartSlice.reducer;

