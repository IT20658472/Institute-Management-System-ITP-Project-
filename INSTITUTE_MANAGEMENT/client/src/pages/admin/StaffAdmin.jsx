import React from 'react'
import { Link } from "react-router-dom"
import Search from '../../components/admin/Search'
import Sidenav from '../../components/admin/Sidenav'

import GenerateReport from '../../components/modal/staffmodal/GenerateReport'
import RegisterModel from '../../components/modal/staffmodal/RegisterModel'
import SearchForDelModel from '../../components/modal/staffmodal/SearchForDelModel'
import SearchForUpdModal from '../../components/modal/staffmodal/SearchForUpdateModal'
import UpdateModel from '../../components/modal/staffmodal/UpdateModel'


export default function StaffAdmin() {
  return (
    <div>
      <Sidenav/>
      <br /><br />
      <div class="row text-center inline">
        <div class="col-md-2"></div>
        <div class="col-md-10 d-flex justify-content-center">
          <RegisterModel/>
          <SearchForUpdModal/>
          <SearchForDelModel/>
          <Link to="/allstaff" className="btn btn-dashb me-5 d-flex align-items-center justify-content-center">
            View Staff
          </Link>
          
        </div>

        
    
      <div>
        <br/>
      <Search/>
        <br/>
      </div>
      <div >
      
          <img src="https://st4.depositphotos.com/1559986/27930/v/950/depositphotos_279309324-stock-illustration-vector-cartoon-illustration-school-pupils.jpg?forcejpeg=true" style={{width: '700px',height:"300px",marginLeft:"200px"}} alt="image"/>
        
        </div>

        <div className="row">
          <div className="col-4"></div>
          <div className="col-4"><Link to="/staffreport" className="btn btn-dashb me-5 d-flex align-items-center justify-content-center" variant="primary" style={{width:"700px" , height:"40px" , marginTop:"10px"}} >
          Generate Report
      </Link></div>
          
        </div>

      </div>

    </div>
  )
}