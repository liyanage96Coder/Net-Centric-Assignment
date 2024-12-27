import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import DashBoard from './pages/DashBoard'
import AdminStudent from './pages/AdminStudent'
import AddStudent from './pages/AddStudent'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/adminStudent" element={<AdminStudent />} />
        <Route path="/addStudent/add" element={<AddStudent />} />
        <Route path="/addStudent/edit/:studentId" element={<AddStudent />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </>
  )
}

export default App
