import React, { useState } from 'react'
import SlideBar from '../component/SlideBar'
import '../assets/css/addstudent.css'
import { Form } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useNavigate } from 'react-router-dom'

function AddStudent() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [gpa, setGpa] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();


  const handleDateChange = (date) => {
    setBirthDate(date)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='addstudent-main-container'>
      <div className='addstudent-main-wrapper'>
        <div className='addstudent-left'>
          <SlideBar />
        </div>
        <div className='addstudent-right'>
          <div>
            <h1>Add Edit Student</h1>
          </div>
          <div className='addstudent-right-sub-topic'>
            <div> <h2>Student Details</h2></div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='username'>Student Name:</label>
                <input id='username' type='text' value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter student name"
                ></input>
                <label htmlFor='birthdate'>Student BirthDate:</label>
                <DatePicker
                  id='birthdate'
                  selected={birthDate}
                  onChange={handleDateChange}
                  dateFormat={"yyyy-MM-dd"}
                  minDate={new Date(1900, 0, 1)}
                  maxDate={new Date()}
                  showYearDropdown
                  scrollableYearDropdown
                  placeholderText='Select a date'
                />
              </div>
              <div>
                <label htmlFor='gpa'>Student GPA:</label>
                <input id='gpa' type='number' step='0.01' value={gpa}
                  onChange={(e) => setGpa(e.target.value)}
                  placeholder="Enter GPA (e.g., 3.5)"
                />
                <label htmlFor="gender">Gender:</label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter student email"
                />
              </div>
              <button type="submit">Add Student</button>
              <button onClick={() => navigate('/adminStudent')}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudent
