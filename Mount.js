import React from 'react';
class Mount extends React.Component {
    constructor() {
        super();
        this.state={
            val:0
        }
        this.update = this.update.bind(this);
    }
    
    update(){
        this.setState({
            val: this.state.val+1
        })
    }
    render() {
        return <button onClick={this.update}>
            {this.state.val} </button>
    }
}

export default Mount