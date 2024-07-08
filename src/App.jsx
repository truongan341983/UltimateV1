import { useState } from 'react'
import './Components/Todo/Todo.css'
import { TodoData } from './Components/Todo/TodoData'
import { TodoNew } from './Components/TodoNew'
import ReactLogo from './assets/react.svg'

const App = () => {

  const [TodoList, SetTodoList] = useState([
    // { id: 1, name: "Learn react" },
    // { id: 2, name: "Learn Angular" }
  ])



  const name = 'Eric';
  const age = 25;

  const Addnewtodo = (name) => {//nhan gia tri tu Todonew
    //   alert(`call me ${name}`)
    const newtodo = {
      id: randomvalue(1, 100000),
      name: name//name 1 la name Todolist, name 2 la name addnewtodo
    }
    SetTodoList([...TodoList, newtodo])
  }

  const Delltodo = (id) => {
    console.log("check butdelete");
  }

  const randomvalue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  return (
    <>
      <div className="Todo-Container">
        <div className="Todo-Title">Hello World        </div>

        <TodoNew
          // Data={Data} // truyen mang qua
          Addnewtodo={Addnewtodo}//truyen ham qua componentTodonew
        />/
        {TodoList.length > 0 ?// {}=if; ?=thi ; :=nguoc lai
          <TodoData
            age={age} //truyen gia tri qua
            name={name}// truyen gia tri
            // truyen mang qua
            TodoList={TodoList}
            Delltodo={Delltodo}//truyen ham qua 
          />
          ://nguoc lai
          <div className='Todo-Image'>
            <img src={ReactLogo} />
          </div>}

      </div>

    </>
  )
}

export default App
