import React from 'react';
import NumberInput from './ReusableInput';

class AppInputTest extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = {
            val : 0
        };
    }
    update() {
        this.setState({val:this.state.val +1});
    }
    render() {
        return (
            <div>
                <NumberInput 
                    type="number"
                    min ={2}
                    max={10}
                    val={+this.state.val}
                    update={this.update}/>
                <label>{this.state.val}</label>
            </div>
        );
    }
}
export default AppInputTest;