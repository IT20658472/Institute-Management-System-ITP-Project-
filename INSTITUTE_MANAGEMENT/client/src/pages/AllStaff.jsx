import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidenav from '../components/admin/Sidenav'
import { MDBCol } from 'mdb-react-ui-kit';

export default function AllStaff(props) {
    const [staff, setStaff] = useState([]);
    const [profile_pic , setProfilepic] = useState("");
    
    const PF = "http://localhost:5000/profilepic/"


    useEffect(()=>{
        const fetchstaff = async ()=>{
            const res  =await axios.get('http://localhost:5000/api/staff')
            setStaff(res.data)
            setProfilepic(res.data['profile_pic'])
            
        }
        fetchstaff()
    },[])
    
    

    return (
        <div>
            <Sidenav />
            <br /><br />
            
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-8 d-flex">
                    {staff.map(stf=>(
                        <div key={stf.staffID} class="card" style={{ width: "20rem", height: "25rem" }}>
                            <div class="card-img-top">
                           
                            <img src={PF+stf.profile_pic} className='img-fluid rounded' style={{height:"200px", width:"200px" }}alt=''  />
                           
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{stf.staffID}</h5>
                                <p class="card-text">{stf.name}</p>
                                <h3 class="card-text">{stf.employment_type}</h3>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            </div>

            )
}