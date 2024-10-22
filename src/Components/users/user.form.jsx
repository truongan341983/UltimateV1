import { Button, Flex, Input, notification, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";
import { json } from "react-router-dom";

const UserForm = (props) => {
    const { loadUser } = props

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [phone, setPhoneNumber] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false)

    //Kiem tra fullname
    const handClick = async () => {
        // alert("click me")
        //in ra biến object là để trong dấu {}     
        const res = await createUserAPI(fullName, email, password, phone)
        // debugger
        //nếu mình gọi res.data bị null mà gọi vào data.data sẽ lỗi.
        //res.data là nhờ cấu hình lại if (response.data && response.data.data) return response.data bên axios.customize
        console.log("check res", res)
        if (res.data) {
            notification.success({
                message: "Create User",
                description: "Tao user thanh cong"
            })
            resetAndCloseModal();
            await loadUser();// truyền ra cha (user)
            console.log("run user form loaduser")
        }
        else {
            notification.error({
                message: "Error Create User",
                description: JSON.stringify(res.message)
            })
        }
        console.log("res data:", res)
        // console.log("check fullname:", { fullName, email, password, phone })
    }

    const resetAndCloseModal = () => {
        setIsModalOpen(false)
        setFullName("")
        setEmail("")
        setPassword("")
        setPhoneNumber("")
    }

    return (
        <div className="User-Form" style={{ margin: "10px 0" }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Table Users</h3>
                <Button
                    type="primary"
                    onClick={() => setIsModalOpen(true)}
                >
                    Create User</Button>
            </div>

            <Modal title="Basic Modal"
                open={isModalOpen}
                onOk={() => handClick()}
                onCancel={() => resetAndCloseModal()}
                maskClosable={false}
                okText={'Creacte User'}
            >
                <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                    <div  >
                        <span>Full Name</span>
                        <Input
                            value={fullName} onChange={(event) => { setFullName(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input value={email} onChange={((event) => { setEmail(event.target.value) })}
                        />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password value={password} onChange={(event) => { setPassword(event.target.value) }} />
                    </div>
                    <div>
                        <span>Phone number</span>
                        <Input value={phone} onChange={(event) => { setPhoneNumber(event.target.value) }} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default UserForm;