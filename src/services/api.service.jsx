import axios from "./axios.customize";
//lấy đường dẫn bên customize đưa vào axios trước Url 

const createUserAPI = (fullName, email, password, phone) => {
    const URL_Backend = "/api/v1/user"
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_Backend, data)
}

const updateUserAPI = (_id, fullName, phone) => {
    const URL_Backend = "/api/v1/user"
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone
    }
    return axios.put(URL_Backend, data)
}
const deleteUserAPI = (id) => {
    //chú ý dấu nháy đặc biệt backtick để truyền javascrip vào
    const URL_Backend = `/api/v1/user/${id}`;//dâu backtick
    return axios.delete(URL_Backend)
}

const fetchAllUserAPI = () => {
    const URL_Backend = "/api/v1/user"
    return axios.get(URL_Backend)
}

const handleUpoadFile = (file, folder) => {
    const URL_Backend = `/api/v1/file/upload`;
    let config = {
        headers: {
            "upload-type": folder,// trong header api: ta có upload-type và truyền vào giá trị folder
            "content-type": "multipart/form-data"
        }
    }
    const bodyFormData = new FormData();
    bodyFormData.append("fileImg", file)//fileImg tên trường trong body trong api; và giá trị file đầu vào là file ta truyền vào

    return axios.post(URL_Backend, bodyFormData, config)
}

const updateUserAvatarAPI = (avatar, _id, fullName, phone) => {
    const URL_Backend = "/api/v1/user"
    const data = {
        avatar: avatar,
        _id: _id,
        fullName: fullName,
        phone: phone
    }
    return axios.put(URL_Backend, data)
}

export {
    createUserAPI, updateUserAPI, fetchAllUserAPI, deleteUserAPI, handleUpoadFile, updateUserAvatarAPI
}