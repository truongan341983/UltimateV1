import { Popconfirm, Space, Table, Tag, notification } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdatUseModal from './update.user.modal';
import { useState } from "react";
import ViewUserDetail from './view.user.detail';
import { deleteUserAPI } from '../../services/api.service';

const UserTable = (props) => {
    //loadUser được truyền trừ User vào usertable, từ usertab truyền xuống cho update user
    const { dataUsers, loadUser } = props
    // console.log(">>>datauser", props)
    //gọi modalupdate
    const [isModalUpdateOpen, setisModalUpdateOpen] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)
    //biến cho viewuserdetail: 1 data người dùng click vào, 2 biến đóng mở draw
    const [dataDetail, setDataDetail] = useState(null)
    const [isDetailOpen, setIsDetailOpen] = useState(false)

    //Kiem tra fullname
    const handDeleteUser = async (id) => {
        const res = await deleteUserAPI(id)
        // debugger
        //nếu mình gọi res.data bị null mà gọi vào data.data sẽ lỗi.
        //res.data là nhờ cấu hình lại if (response.data && response.data.data) return response.data bên axios.customize
        console.log("check res", res)
        if (res.data) {
            notification.success({
                message: "Delete User",
                description: "Xóa user thanh cong"
            })
            await loadUser();// truyền ra cha (user) load lại
            // console.log("run user form loaduser")
        }
        else {
            notification.error({
                message: "Error Xóa User",
                description: JSON.stringify(res.message)
            })
        }
    }


    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#' onClick={() => {
                        //khi click vào thay đổi datadetail và mở draw
                        setDataDetail(record)
                        console.log("data detail", record)
                        setIsDetailOpen(true)
                    }}
                    >
                        {record._id}</a>
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
                    <Popconfirm
                        title="xóa người dùng"
                        description=" bạn có chắc xóa user này"
                        onConfirm={() => { handDeleteUser(record._id) }}
                        okText="OK"
                        cancelText="No"
                        //hiển thị vị trí bên trái
                        placement='left'
                    >
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </Popconfirm>

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
            <ViewUserDetail
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
                isDetailOpen={isDetailOpen}
                setIsDetailOpen={setIsDetailOpen}
                loadUser={loadUser}
            />
        </>
    )
}
export default UserTable;