const TodoData = (props) => {
    const { age, name, Data, TodoList } = props;
    return (
        <>
            <div className="Todo-Data">
                <div>data</div>
                <div>music</div>
                {JSON.stringify(props.TodoList)}
            </div>
        </>
    )
}
export { TodoData };