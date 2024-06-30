const TodoNew = (props) => {

    const { name, age, Data, Addnewtodo } = props;//truyen data, hafm tu app qua
    console.log(">>>>>", Addnewtodo);
    Addnewtodo('Erric');//goi ham va truyen gia tri vao ham len cha
    return (
        <>
            <div>ho ten: {JSON.stringify(Data)}</div>
            {/* goi data tu app */}
            <div className="Todo-New">
                <input type="text" />
                <button>Add</button>
            </div>
        </>
    )
}


export { TodoNew };