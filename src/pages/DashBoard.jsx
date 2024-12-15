import React from 'react'
import SlideBar from '../component/SlideBar'
import '../assets/css/dashboard.css'

function DashBoard() {
    return (
        <div className='dashboard-main-container'>
            <div className='dashboard-main-wrapper'>
                <div className='dashboard-left'>
                    <SlideBar />
                </div>
                <div className='dashboard-right'>
                    <div>
                        <h1>DashBoard</h1>
                    </div>
                    <div className='dashboard-right-summary'>
                        <div>Total count</div>
                        <div>Male count</div>
                        <div>Female count</div>
                    </div>
                    <div className='adminstudent-right-sub-topic'>
                        <div> <h2>Student List</h2></div>
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
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>1996/05/16</td>
                                    <td>2.56</td>
                                    <td>Male</td>
                                    <td>test@gmail.com</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
