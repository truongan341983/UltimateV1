import { Space, Table, Tag } from 'antd';

const UserTable = (props) => {
    const { dataUsers } = props

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


    // //đầu tiên chạy hết dòng này
    console.log("run render table 000")
    return <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
}
export default UserTable;