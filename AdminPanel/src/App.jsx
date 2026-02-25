import React from 'react'
import { Routes , Route } from 'react-router-dom'
import ListFoods from './pages/ListFoods/ListFoods'
import SideBar from './components/sidebar/SideBar'
import MenuBar from './components/menubar/MenuBar'
import AddFood from './pages/AddFood/AddFood'
import Orders from './pages/Orders/Orders'
import {ToastContainer} from 'react-toastify'

const App = () => {
  const [sidebarVisible , setSidebarVisible] = React.useState(true);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  }
  return (
    <div className="d-flex" id="wrapper">

            <SideBar sidebarVisible={sidebarVisible}/>
            
            {/* <!-- Page content wrapper--> */}
            <div id="page-content-wrapper">
                {/* <!-- Top navigation--> */}
                <MenuBar toggleSidebar={toggleSidebar}/> 
                <ToastContainer />
                {/* <!-- Page content--> */}
                <div className="container-fluid">
                     <Routes>
                        <Route path="/addfood" element={<AddFood />} />
                        <Route path="/listfoods" element={<ListFoods />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/" element={<ListFoods />} />
                     </Routes>
                </div>
            </div>
        </div>
  )
}

export default App