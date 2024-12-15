import React from 'react'
import SlideBar from '../component/SlideBar'
import '../assets/css/adminstudent.css'
import { useNavigate } from 'react-router-dom'

function AdminStudent() {
    const navigate = useNavigate();
    return (

        <div className='adminstudent-main-container'>
            <div className='adminstudent-main-wrapper'>
                <div className='adminstudent-left'>
                    <SlideBar />
                </div>
                <div className='adminstudent-right'>
                    <div>
                        <h1>Admin Student</h1>
                    </div>
                    <div className='adminstudent-right-sub-topic'>
                        <div> <h2>Student List</h2></div>
                        <div className='adminstudent-right-sub-topic-button'>
                            <button onClick={() => navigate('/addStudent')}>Add Student</button>
                            <button style={{ backgroundColor: '#f54a4a' }}>Delete Student</button>
                        </div>

                    </div>
                    <div className='adminstudent-table-main'>
                        <table className='adminstudent-table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>DOB</th>
                                    <th>GPA</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Edit Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>1996/05/16</td>
                                    <td>2.56</td>
                                    <td>Male</td>
                                    <td>test@gmail.com</td>
                                    <td><button onClick={()=> navigate('/addStudent')}>Edit</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AdminStudent
