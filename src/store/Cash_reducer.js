
const default_Cash_state = {
   cash:0,
}
const Cash_reducer =(state = default_Cash_state ,action)=>{
   switch (action.type){
     case "ADD_CASH": return {
       ...state, 
       cash: state.cash + action.payload.cash
     }
 
     case "REMOVE_CASH" : return {
       ...state, 
       cash: state.cash - action.payload.cash
     }
 
     default: return state
   }
 }

export default Cash_reducer