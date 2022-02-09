import React from 'react'

class Course extends React.Component {
    render(){
        return (
            <div>
                <h2>Course</h2>
                <select name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
    
                <select name="" id="">
                    <option value="4"> A+ </option>
                    <option value="3.75"> A </option>
                    <option value="3.50"> A- </option>
                    <option value="3.25"> B+ </option>
                    <option value="2.75"> B- </option>
                    <option value="2.5"> C+ </option>
                    <option value="2.25"> C </option>
                    <option value="2"> D </option>
                </select>
            </div>
        )
    }
}

export default Course
