import { Flex, Input, notification, Modal } from "antd";
import { useEffect, useState } from "react";
import { createUserAPI, updateUserAPI } from "../../services/api.service";


const UpdatUseModal = (props) => {
    //truyen tu table qua
    const { isModalUpdateOpen, setisModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props

    // console.log("check dataUpdate từ table")
    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhoneNumber] = useState("");

    useEffect(() => {
        // console.log("check dataupdate props", dataUpdate)
        if (dataUpdate) {

            setId(dataUpdate._id)
            setFullName(dataUpdate.fullName)
            setPhoneNumber(dataUpdate.phone)
        }
    }, [dataUpdate])

    // const [isModalUpdateOpen, setisModalUpdateOpen] = useState(true)

    //Kiem tra fullname
    const handClickUpdate = async () => {
        // alert("click me")
        //in ra biến object là để trong dấu {}
        const res = await updateUserAPI(id, fullName, phone)
        // debugger
        //nếu mình gọi res.data bị null mà gọi vào data.data sẽ lỗi.
        //res.data là nhờ cấu hình lại if (response.data && response.data.data) return response.data bên axios.customize
        // console.log("check res", res)
        if (res.data) {
            notification.success({
                message: "Update User",
                description: "cập nhật user thanh cong"
            })
            resetAndCloseModal();
            await loadUser();// truyền từ user qua user table đến update user để load lại table
            // console.log("run user form loaduser")
        }
        else {
            notification.error({
                message: "Error Create User",
                description: JSON.stringify(res.message)
            })
        }
        // console.log("res data:", res)
        // console.log("check fullname:", { fullName, email, password, phone })
    }

    const resetAndCloseModal = () => {
        setisModalUpdateOpen(false)
        setFullName("")
        setId("")
        setPhoneNumber("")
        //đóng modal thì phải set data=null 
        // setDataUpdate(null)
    }

    return (
        <Modal title="Update a user"
            open={isModalUpdateOpen}
            onOk={() => handClickUpdate()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={'SAVE'}
        >
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                <div>
                    <span>ID</span>
                    <Input value={id} disabled
                    />
                </div>
                <div  >
                    <span>Full Name</span>
                    <Input
                        value={fullName} onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input value={phone} onChange={(event) => { setPhoneNumber(event.target.value) }} />
                </div>
            </div>
        </Modal>
    )

}

export default UpdatUseModal