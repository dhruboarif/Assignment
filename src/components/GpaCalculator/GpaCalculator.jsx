import React from 'react'
import Course from './Course';

class GpaCalculator extends React.Component {
    constructor() {
        super();

        this.state = {
            courses: [{ credit: 4.0, grade: 3 }, { credit: 4.0, grade: 3 } ]
        }; 
    }

    render() {
        let styles = {
            marginLeft: '20px',
            width: '250px',
            height: '250px',
            backgroundColor: 'yellow',
          };
        let totalCredit = 0, totalGrade = 0; 

        const courses = this.state.courses.map(course => {
            totalCredit += course.credit; 
            totalGrade += course.grade * course.credit; 
            
            return <Course />;
        });

        
        return (
            <div style={styles}>
                {courses}
               
               <p>{(totalGrade / totalCredit).toFixed(2)}</p>
                
            </div>
        )
    }
}

export default GpaCalculator



