import UserForm from "../Components/users/user.form";
import UserTable from "../Components/users/user.table";

const UserPage = () => {
    return (
        <div>
            <div style={{ padding: "20px" }}>
                <UserForm />
                <UserTable />
            </div>
        </div>
    )
}

export default UserPage;