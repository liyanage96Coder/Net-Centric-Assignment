import {toast} from "react-tostify"
import {getRequest} from "../routes/Routes"


export const loadStudents = async () => {
    let students = [];
    await getRequest('/api/student').then(response => {
        if (response.status === 200) {
            students = response.data.students;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    });
    return students;
};

export const loadStudent = async (id) => {
    let student = null;
    await getRequest('/api/student/' + id).then(response => {
        if (response.status === 200) {
            student = response.data.student;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    });
    return student;
};