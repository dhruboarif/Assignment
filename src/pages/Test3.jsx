import React, {Component} from 'react';
import Test1 from './Test1';


class Test3 extends Component {
    render() {
        console.log(this.props.product)
        return (
            <div>
                <h2> I am from test 3</h2>
               
            </div>
        );
    }
}

export default Test3; 

