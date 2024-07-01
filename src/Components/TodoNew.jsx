import { useState } from "react";

const TodoNew = (props) => {

    const { Addnewtodo, Data } = props;//truyen data, hafm tu app qua
    // console.log(">>>>>", Addnewtodo);

    //khai báo hook
    const [Inputvalue, SetInputvalue] = useState('eric')

    // Addnewtodo('Erric');//goi ham va truyen gia tri vao ham len cha
    const handleOnclick = () => {
        console.log(">>>ons click", Inputvalue)
    }
    const handleOnchange = (name) => {
        console.log(">>>onchange", name)
        SetInputvalue(name)
    }

    return (
        <>
            <div>ho ten: {JSON.stringify(Data)}</div>
            {/* goi data tu app */}
            <div className="Todo-New">
                <input
                    type="text"
                    onChange={(event) => handleOnchange(event.target.value)}
                //chuyen gia tri
                />
                <button
                    style={{ cursor: "pointer" }}
                    onClick={handleOnclick}
                >Add</button>
                <div>my name={Inputvalue}</div>
            </div>
        </>
    )
}


export { TodoNew };