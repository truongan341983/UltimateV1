import UserForm from "../Components/users/user.form";
import UserTable from "../Components/users/user.table";
import { fetchAllUserAPI } from '../services/api.service';
import { useEffect, useState } from 'react';

const UserPage = () => {
    const [dataUsers, SetdataUsers] = useState([])

    //sau khi chay hết rồi mới chạy vào useEffect, useEffect có 2 tham số 1 arrow fucion và array(mảng)
    useEffect(() => {
        // console.log("run useEffect 111")
        loadUser()
    }, []);

    //gọi data từ api lên
    const loadUser = async () => {//async nên chỗ nào loadUser phải để await
        //gọi api từ fetchAllUserAPI rồi chuyền vào res.
        const res = await fetchAllUserAPI()
        // cập nhật data vào dataUsers thông qua SetdataUsers. Truyền vào usertable và vẽ lại 
        SetdataUsers(res.data)
        // console.log("run loaduser from user ")
    }
    // đưa data về cha( userpage) quản lý 
    return (
        <div>
            <div style={{ padding: "20px" }}>
                <UserForm loadUser={loadUser} />
                <UserTable
                    dataUsers={dataUsers}
                    loadUser={loadUser}
                />
            </div>
        </div>
    )
}

export default UserPage;