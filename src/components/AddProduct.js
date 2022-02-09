import React from "react";


class Addproduct extends React.Component{
    state = {
        name: "", 
        description: "",
        price: "",
        cat: "",
    }

    add = (e) =>{
        e.preventDefault(); 
        if(this.state.name === "" || this.state.description ==="" || this.state.price ==="" || this.state.cat ===""){
            alert("All the fields are mandatory");
            return;  
        }
        this.props.addProductHandler(this.state);
        this.setState({name:"", description:"", price:"", cat:""});
    }
    render(){
        return(
            <div className="ui main">
                <h2>Add Product</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Product Name</label>
                        <input type="text" name="name" placeholder="Product Name" 
                        value={this.state.name}
                        onChange={(e) =>this.setState({name: e.target.value})}>
                        </input>
                    </div>
                    <div className="field">
                        <label>description</label>
                        <input type="text" name="desc" placeholder="Description"
                        value={this.state.description}
                        onChange={(e) =>this.setState({description: e.target.value})}></input>
                    </div>
                    <div className="field">
                        <label>Price</label>
                        <input type="number" name="price" placeholder="price"
                        value={this.state.price}
                        onChange={(e) =>this.setState({price: e.target.value})}></input>
                    </div>
                    <div className="field">
                        <label>Category</label>
                        <input type="text" name="cat" placeholder="Category"
                        value={this.state.cat}
                        onChange={(e) =>this.setState({cat: e.target.value})}></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}

export default Addproduct; 