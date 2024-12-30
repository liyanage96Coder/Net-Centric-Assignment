import React, { useEffect, useState } from 'react'
import SlideBar from '../component/SlideBar'
import '../assets/css/adminstudent.css'
import { useNavigate } from 'react-router-dom'
import { loadStudents, handleDeleteCheckBox } from '../common/Common'
import { deleteRequest } from "../routes/Routes"
import { toast } from "react-toastify"
import PopUp from '../component/popUp'

function AdminStudent() {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const [showPopUp, setShowPopUp] = useState(() => {
        return localStorage.getItem('isLoggedOut') === 'true';
    });

    useEffect(() => {
        localStorage.setItem('isLoggedOut', showPopUp);
    }, [showPopUp]);

    useEffect(() => {
        loadStudents()
            .then(data => {
                setStudents(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const tableBody = () => {
        let body = [];
        students.forEach((data, index) => {
            body.push(
                <tr key={"Student" + index}>
                    <th scope="row" >
                        <input type="checkbox" style={{ marginRight: 10 + "px" }}
                            id={'studentDelete' + data.id}
                            checked={selectedRows.includes(data.id)}
                            onChange={() => handleDeleteCheckBoxFunction(data.id)}
                        />
                    </th>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.dob}</td>
                    <td>{data.gpa}</td>
                    <td>{data.gender}</td>
                    <td>{data.email}</td>
                    <td><button id={'student' + index} onClick={() => navigate('/addStudent/edit/' + data.id)}>Edit</button></td>
                </tr>
            );
        });
        return body;
    };

    const handleDeleteCheckBoxFunction = (id) => {
        setSelectedRows([...handleDeleteCheckBox(id, selectedRows)]);
    };

    const deleteFunction = () => {
        selectedRows.forEach((row, index) => {
            deleteRequest('http://127.0.0.1:8000/api/student/' + row).then(response => {
                console.log(response);
                if (response.status === 200) {
                    if (response.data.error) {
                        toast.error(response.data.message, {
                            position: "bottom-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    } else {
                        if (selectedRows.length === index + 1) {
                            setStudents(values => values.filter(function (data) {
                                return !selectedRows.includes(data.id);
                            }));
                            setSelectedRows([]);
                            toast.success('Successfully deleted Student', {
                                position: "bottom-center",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        }
                    }
                } else {
                    toast.error('An error occurred!', {
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
        });
    };

    const handleFormSubmit = (email, password) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailRegex.test(email) && email === 'admin@gmail.com' && password === 'admin@123') {
            setShowPopUp(false);
        } else {
            alert('Invalid email or password');
        }
    };

    const handelClick = () => {
        setShowPopUp(true);
    };

    return (
        showPopUp ? (
            <div>
                <div className='adminstudent-left'>
                    <SlideBar />
                </div>
                <div className='popup-container' >
                    < PopUp onFormSubmit={handleFormSubmit} />
                </div>
            </div>
        ) : (
            <div className='adminstudent-main-container'>
                <div className='adminstudent-main-wrapper'>
                    <div className='adminstudent-left'>
                        <SlideBar />
                    </div>
                    <div className='adminstudent-right'>
                        <div className='adminstudent-right-topic'>
                            <h1>Admin Student</h1>
                            <button onClick={handelClick}>LogOut</button>
                        </div>
                        <div className='adminstudent-right-sub-topic'>
                            <div> <h2>Student List</h2></div>
                            <div className='adminstudent-right-sub-topic-button'>
                                <button onClick={() => navigate('/addStudent/add')}>Add Student</button>
                                <button onClick={deleteFunction}
                                    disabled={selectedRows.length === 0}
                                    style={{ backgroundColor: '#f54a4a' }}>Delete Student</button>
                            </div>

                        </div>
                        <div className='adminstudent-table-main'>
                            <table className='adminstudent-table'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>DOB</th>
                                        <th>GPA</th>
                                        <th>Gender</th>
                                        <th>Email</th>
                                        <th>Edit Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableBody()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default AdminStudent
