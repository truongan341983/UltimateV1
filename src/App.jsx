import { useState } from 'react'
import './Components/Todo/Todo.css'
import { TodoData } from './Components/Todo/TodoData'
import { TodoNew } from './Components/TodoNew'
import ReactLogo from './assets/react.svg'

const App = () => {

  const [TodoList, SetTodoList] = useState([
    { id: 1, name: "Learn react" },
    { id: 2, name: "Learn Angular" }
  ])



  const name = 'Eric';
  const age = 25;
  const Data = { city: 'ag', country: 'vn' };
  const Addnewtodo = (name) => {//nhan gia tri tu Todonew
    //   alert(`call me ${name}`)
  }

  return (
    <>
      <div className="Todo-Container">
        <div className="Todo-Title">Hello World        </div>

        <TodoNew
          Data={Data} // truyen mang qua
          Addnewtodo={Addnewtodo}//truyen ham qua Todonew
        />
        <TodoData
          age={age} //truyen gia tri qua
          name={name}// truyen gia tri
          Data={Data} // truyen mang qua
          TodoList={TodoList}
        />
        <div className='Todo-Image'>
          <img src={ReactLogo} />
        </div>
      </div>

    </>
  )
}

export default App
