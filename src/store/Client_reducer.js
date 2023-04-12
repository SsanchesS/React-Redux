
const default_client_state =[
   {
     id:0,
     name:"admin"
   },
 ]
const Client_reducer =(state = default_client_state,action)=>{
   switch (action.type){
     case "ADD_USER": return [
       ...state,
       {id:new Date().getTime(),name:action.name}
     ]
     case "REMOVE_USER":{
       let newState = state.filter(e=>e.name!==action.name)
       return newState
         
     }
     default: return state
   }
}

export default Client_reducer