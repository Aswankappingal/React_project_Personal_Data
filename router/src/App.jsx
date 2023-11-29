import Home from './Component/Body/Home/Home'
import Edit from './Component/Body/Edit/Edit'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Component/Navbar/Navbar'
import Register from './Component/Body/REGISTER/Register'
import View from './Component/Body/View/View'




function App() {


  return (
    
    <>
    <BrowserRouter>
    <Navbar/>
    
      <Routes>
        <Route  path="/" Component={Home} />
        <Route  path="/edit/:id" Component={Edit} />
        <Route  path="/register" Component={Register} />
        <Route  path="/view/:id" Component={View} />
        
      </Routes>
    
    </BrowserRouter>
  
    </>
  )
}

export default App
