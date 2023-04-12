import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux"                // Импортируем тот самый displatch и useSelector для получения состояния

const App = () =>{
  const displatch = useDispatch()
  const cash = useSelector(state=>state.cash.cash)                   // Функция, которая принимает функцию, а та параметром принимает состояние

  const action_add_cash = {type:"ADD_CASH", payload:{cash:25}}
  const action_remove_cash = {type:"REMOVE_CASH", payload:{cash:5}}

  const AddCash=()=>{
    displatch(action_add_cash)             // обязательно action с типом
  }
  const RemoveCash=()=>{
    displatch(action_remove_cash)          // обязательно action с типом
  }
  //

  const clients = useSelector(state=>state.clients)


  let input_name_ref = React.useRef()

  const AddClient=()=>{
    let name = input_name_ref.current.value
    const action_add_client = {type:"ADD_USER",name}
    displatch(action_add_client)            
  }
  const RemoveClient=()=>{
    let name = input_name_ref.current.value
    const action_remove_client = {type:"REMOVE_USER",name}
    displatch(action_remove_client)          
  }

return (
  <div className="App">
    <div className="wrap">
      <div className="cash_wrap">
        <div className="cash">{cash}</div>
        <div className="btns">
          <button onClick={AddCash}>Добавить 25</button>
          <button onClick={RemoveCash}>Удалить 5</button>
        </div>
      </div>

      <div className="client_wrap">
        <div className="client">{clients.map(e=><div key={e.id} className="client">{e.name}</div> )}</div>
        <div className="name">
          <input ref={input_name_ref} type="text" placeholder='name'/>
        </div>
        <div className="btns">
          <button onClick={AddClient}>Добавить Клиента</button>
          <button onClick={RemoveClient}>Удалить Клиента</button>
        </div>
      </div>
    </div>
  </div>
)}
export default App;