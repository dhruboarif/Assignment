//import React from 'react'; 

import React, { Component } from 'react'
//import { Link } from 'react-router-dom'; 


class Addstudent extends Component{
    render(){
        return(
            <h1>Hello {this.props.name}</h1>
        )
    }
}
// class Addstudent extends Component
// {
//     render(){
//         return (
//             <div className="row">
//                 <div className="col-md-6">
//                     <div className="card">
//                         <div className="card-header">
//                             <h4>
//                                 Add Student
//                                 <link to={'/home'} className="btn btn-primary btn-sm float-end"> Back</link>
//                             </h4>

//                         </div>
//                         <div className="card-body">
//                             <form>
//                                 <div className='form-group mb-3'>
//                                     <label>Student Name</label>
//                                     <input type="text" name="" value="" className="form-control"></input>
//                                 </div>
//                                 <div className='form-group mb-3'>
//                                     <label>Student Course</label>
//                                     <input type="text" name="" value="" className="form-control"></input>
//                                 </div>
//                                 <div className='form-group mb-3'>
//                                     <label>Student Email</label>
//                                     <input type="text" name="" value="" className="form-control"></input>
//                                 </div>
//                                 <div className='form-group mb-3'>
//                                     <label>Student Phone</label>
//                                     <input type="text" name="" value="" className="form-control"></input>
//                                 </div>
//                             </form>

//                         </div>

//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default Addstudent; 