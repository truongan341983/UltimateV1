import { Button, Flex, Input } from "antd";
import { useState } from "react";



const UserForm = () => {
    const [FullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("");

    //Kiem tra fullname

    const handClick = () => {
        // alert("click me")
        //in ra biến object là để trong dấu {}
        console.log("check fullname:", { FullName, Email, password, PhoneNumber })
    }

    return (
        <div className="User-Form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                <div  >
                    <span>Full Name</span>
                    <Input
                        value={FullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input value={Email} onChange={((event) => { setEmail(event.target.value) })}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password value={password} onChange={(event) => { setPassword(event.target.value) }} />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input value={PhoneNumber} onChange={(event) => { setPhoneNumber(event.target.value) }} />
                </div>
                <div>
                    <Button type="primary" onClick={() => handClick()}> Create User</Button>
                </div>

            </div>

        </div>
    )
}
export default UserForm;