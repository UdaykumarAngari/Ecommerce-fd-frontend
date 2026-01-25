import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const SideBar = ({sidebarVisible}) => {
  return (
    <div className={`${sidebarVisible ? '' : 'd-none'} border-end bg-white`} id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">
          <img src={assets.logo} alt="Logo" className="img-fluid" height={32} width={32} />
        </div>
        <div className="list-group list-group-flush">
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/addfood">
            <i className='bi bi-plus-circle m-2'></i>Add Food</Link>
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/listfoods"><i className='bi bi-list-ul m-2'></i>Foods</Link>
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/orders"><i className='bi bi-cart m-2'></i>Orders</Link>
        </div>
    </div>
  )
}

export default SideBar