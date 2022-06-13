import React from 'react';
import '../../../style.css'
import StaffGenerateReport from '../../admin/staffgeneratereport';




export default function GenerateReport(props) {
 
  return (
    <>


  
   <div>
  
   <div class="container-fluid">


                <div class="row">
               
                  
               
              
                        <div class="col-md-1">
                        {/* <h1 class="fredoka"> Hello Jhon ! </h1> */}
                    </div>
                    <div class="col-md-7">
                        <br/>
                        <h1 class="fredoka"> Hello Admin ! </h1>
                    </div>
                    <div class="col-md-2 " >
                        <br/>
                        <i class="fa fa-bell icon-dash d-inline mr-4 yellow">  </i>
                        <a href="#" class="btn btn-dash d-inline "> <i class="fa fa-user d-inline white icon-dash" style={{fontsize: '15px'}}>  </i> <span style={{ color: "white" }}>Log out</span></a>
                    </div>

                </div>
            </div> <br /><br />
            <StaffGenerateReport/>
          
   </div>
     
    </>
  )

}