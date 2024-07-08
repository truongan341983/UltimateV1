const TodoData = (props) => {
    const { TodoList, Delltodo } = props;
    console.log("check props", TodoList)

    const HandleClickDelete = (id) => {
        alert(id)
    }
    return (
        <>
            <div className="Todo-Data">
                {/*khởi nguồn cho react là {} */}
                {TodoList.map((item, index) => {
                    console.log("check map:", item, index)
                    return (
                        // lấy id làm key
                        < div className="todo-item" key={item.id} >
                            <div>{item.name}</div>
                            <button
                                onClick={() => HandleClickDelete(item.id)}
                                style={{ cursor: "pointer" }}
                            >Delete</button>
                        </div>
                    )
                })}

            </div >
        </>
    )
}
export { TodoData };