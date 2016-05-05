import React from 'react';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "default",
            age:12
        }
        this.update = this.update.bind(this);
    }
    update(e) {
        this.setState({
            name:e.target.value
        });
    }
    render() {
//        return (<div> 
//                    <Widget txt={this.state.name} update={this.update}/>
//                </div>);
        return (
            <div>
                {this.state.name}
                <Slider update={this.update} />
            </div>
        )
    }
}

class Slider extends React.Component {
   render() {
       return (<div> 
                <input type="range" min="0" max="255" onChange={this.props.update}/>
                </div>);         
    }             
}        
                
const Widget = (props) => {
    return (<div> Statefull function
                    <input type="text"  
                        onChange={props.update} />
                    <h1>{props.txt}</h1>
                </div>);
}

App.propTypes ={
                name:React.PropTypes.string.isRequired,
                age : React.PropTypes.number
                }
//const App = () => <div> State less Function </div>

export default App