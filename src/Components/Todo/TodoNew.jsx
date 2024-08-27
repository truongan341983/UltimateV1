import { useState } from "react";

const TodoNew = (props) => {

    const { Addnewtodo } = props;//truyen data, hafm tu app qua
    // console.log(">>>>>", Addnewtodo);

    //khai báo hook
    const [Inputvalue, SetInputvalue] = useState('eric')

    // Addnewtodo('Erric');//goi ham va truyen gia tri vao ham len cha
    const handleOnclick = () => {
        // console.log(">>>ons click", Inputvalue)
        Addnewtodo(Inputvalue);
        //sau khi lam xong thi xoa di
        SetInputvalue("");
    }

    const handleOnchange = (name) => {
        console.log(">>>onchange", name)
        SetInputvalue(name)
    }

    return (
        <>
            {/* goi data tu app */}
            <div className="Todo-New">
                <input
                    type="text"
                    //chuyen gia tri
                    onChange={(event) => handleOnchange(event.target.value)}
                    //=state cua react
                    value={Inputvalue}
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