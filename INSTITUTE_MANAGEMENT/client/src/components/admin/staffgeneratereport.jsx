import React from 'react';
import { useState,useEffect } from 'react';
import { Table } from 'react-bootstrap'
import axios from "axios";
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function StaffGenerateReport(props) {

  const [staff, setstaff] = useState([])
  

  useEffect(() => {
    axios.get("http://localhost:5000/api/staff/")

    .then(res => {   
      setstaff(res.data);
        
    })
    .catch(err => {
      console.log(err);
    })

  })

    // print report
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
    content: ()=> componentRef.current,
    });

  return (
    
    <>
      <div class="col py-3">
              <button type="button" class="btn-dashb float-end" style={{height:"50px", width:"10%", marginRight:"10px",marginTop:"50px"}} onClick={handlePrint}>
                  Print Report
              </button>
      
        <h1 className="text-center" style={{marginLeft:"300px"}} > <font face = "Comic sans MS" size ="6" > Existing Staff Members </font> </h1><br /><br />
        <div class="float-end" >
        
        </div>
      
    <br />
    <div  style={{width:"200px",marginLeft:"80px"}}>
    <button type="button" class="dbox_action_btn float-left"  >
                 Accademic
    </button>
    </div>
    <br/>
    <br/>
    <div style={{width:"200px",marginLeft:"80px"}}>
    <button type="button" class="dbox_action_btn float-left">
                 Non-Accademic
    </button>
    </div>
    <br/>
    <br/>
    <div ref = {componentRef}>
    
    <div style={{width:"1300px",height:"500px",marginLeft:"100px",marginRight:"100px",marginTop:"30px"}}>
    <Table  striped bordered hover variant="dark " >
           
   <thead>
    <tr>
      
      <th><span>Staff ID</span> </th>
      <th><span>Subject ID</span> </th>
      <th><span>Name</span> </th>
      <th><span>Subject</span> </th>
      <th><span>Position</span> </th>
      <th><span>Employeement Type</span> </th>
      
       
       
        </tr>
  </thead>

  <tbody> { staff.map(cs =>
              <tr key={cs.staffID}>
                 <td>{cs.staffID}</td>
                <td>{cs.subCode}</td>
                <td>{cs.name}</td>
                <td>{cs.core_subject}</td>
                <td>{cs.position}</td>
                <td>{cs.employment_type}</td>
               
            
               
               
              
               </tr>)
              }
  </tbody>
</Table>
</div>
</div>
    </div>
    </>
  );
}