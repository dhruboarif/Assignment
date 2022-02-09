import React from 'react'; 

class Clock extends React.Component {
    state = {date : new Date() }; 
    
    componentDidMount(){
        setInterval(() => this.tick(), 1000);
    }

    //component unmount 
    componentWillUnmount(){
        clearInterval(this.clockTimer); 
    }

    tick(){
        this.setState({
            date: new Date(),
        });
    }
    render() {
        return (
            <h1 className="heading">
            <span className="text"> Hello - 
            {new Date().toLocaleTimeString()}
            </span>

        </h1>
        )
    }
}

export default Clock; 