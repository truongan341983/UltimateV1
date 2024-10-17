import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';



const UserTable = () => {
    const [dataUsers, SetdataUsers] = useState([])
    useEffect(() => {
        loadUser()
    }, []);
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',

        },
        {
            title: 'FullName',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        }

    ];


    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        //chuyền động data vào datausers
        SetdataUsers(res.data)

    }



    return <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />

}
export default UserTable;