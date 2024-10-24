import { Space, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdatUseModal from './update.user.modal';
import { useState } from "react";

const UserTable = (props) => {
    //loadUser được truyền trừ User vào usertable, từ usertab truyền xuống cho update user
    const { dataUsers, loadUser } = props
    // console.log(">>>datauser", props)
    //gọi modalupdate
    const [isModalUpdateOpen, setisModalUpdateOpen] = useState(false)

    const [dataUpdate, setDataUpdate] = useState(null)

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#'>{record._id}</a>
                )
            }
        },
        {
            title: 'FullName',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined onClick={() => {
                        // console.log("check update", record)
                        //khi click vào edit nhờ react lưu trữ lại da ta. khi gọi hàm (setDataUpdate) là react tự render lại và chạy từ trên xuống dưới 
                        setDataUpdate(record)
                        //click vào hiện form update
                        setisModalUpdateOpen(true)
                    }}
                        style={{ cursor: "pointer", color: "orange" }} />
                    <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                </div>
            ),
        },
    ];


    // //đầu tiên chạy hết dòng này
    // console.log("run render table 000")
    // console.log("check dataupdate", dataUpdate)
    return (
        <>

            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"}
            />
            <UpdatUseModal
                //chuyền giá trị modal qua con
                isModalUpdateOpen={isModalUpdateOpen}
                // cập nhật giá trị modal                 
                setisModalUpdateOpen={setisModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
        </>
    )
}
export default UserTable;