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
                    Other contain
                </div>
            </div>
        </div>
    )
}

export default DashBoard
