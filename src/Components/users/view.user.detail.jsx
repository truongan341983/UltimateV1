import { Button, Drawer, notification } from 'antd';
import { useState } from 'react';
import { handleUpoadFile, updateUserAvatarAPI } from '../../services/api.service';

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen, loadUser } = props

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null)

    const handelOnchangeFile = (event) => {
        if (!event.target.files || event.target.files === 0) {
            //neu khong upload file thi cho null
            selectedFile(null)
            setPreview(null)
            return;
        }
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file))
        }
    }
    // console.log("check file", file)
    // console.log("check file", preview)
    // console.log("check file", file)

    const handleUpdateUserAvatar = async () => {
        // console.log("upload file", selectedFile)
        //bước 1:uploadfile
        const resUpload = await handleUpoadFile(selectedFile, "avatar");//file upload là biết state selectedFile
        // console.log("check resUpload", resUpload)
        if (resUpload.data) {
            const newAvatar = resUpload.data.fileUploaded;//fileUploaded trong data
            // console.log("check newAvatar", newAvatar)
            // bước 2
            const resUpdateAvatar = await updateUserAvatarAPI(newAvatar, dataDetail._id, dataDetail.fullName, dataDetail.phone)

            if (resUpdateAvatar.data) {
                //clear data
                setIsDetailOpen(false);
                setSelectedFile(null);
                setPreview(null);
                //load data
                await loadUser();
                notification.success({
                    message: "Update user avatar",
                    description: "Cập nhật Avatar thành công"
                })
            }
            else {
                notification.error({
                    message: "Erro upload file avatar",
                    description: JSON.stringify(resUpload.message)
                })
            }
        }

        else {
            notification.error({
                message: "Erro upload file",
                description: JSON.stringify(resUpload.message)
            })
            // return;// return là thoát ra khỏi dòng
        }

    }

    return (

        <Drawer title="Chi tiết User"
            width={"40VW"}
            onClose={() => {
                setDataDetail(null);
                setIsDetailOpen(false);
            }}
            open={isDetailOpen}
        >
            {dataDetail ? <>
                <p>ID: {dataDetail._id}</p>
                <br />
                <p>FULL NAME: {dataDetail.fullName}</p>
                <br />
                <p>Phone: {dataDetail.phone}</p>
                <br />
                <p>AVARTAR:</p>
                <div
                    style={{
                        marginTop: "10px",
                        height: "100px", width: "150px",
                        border: "1px solid #ccc"

                    }}
                >
                    <img
                        style={{ height: "100%", width: "100%", objectFit: "contain" }}
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} />
                </div>
                <div>
                    <label
                        htmlFor='btnUpload'
                        style={
                            {
                                display: "block",
                                width: "fit-content",
                                marginTop: "15px",
                                padding: "5px 10px",
                                background: "orange",
                                borderRadius: "5px",
                                cursor: "pointer"

                            }
                        }
                    >
                        Update Avartar</label>
                    <input
                        type='file' hidden id='btnUpload'
                        //  onChange={handOnchangeFile}
                        onChange={(event) => handelOnchangeFile(event)}
                    />
                </div>
                {preview &&
                    <>
                        <div
                            style={{
                                marginTop: "10px",
                                marginBottom: "15px",
                                height: "100px", width: "150px",


                            }}
                        >
                            <img
                                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                                src={preview} />
                        </div>
                        <Button type='primary' onClick={() => handleUpdateUserAvatar()}>Save</Button>
                    </>
                }
            </>
                :
                <>
                    <p>Không có dữ liệu</p>
                </>
            }
        </Drawer>
    );
}

export default ViewUserDetail