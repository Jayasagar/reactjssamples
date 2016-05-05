import React from 'react';

let Mixin = InnerComponent => class extends React.Component {
    constructor() {
        super();
        this.state = {
            val:0
        }
        this.update = this.update.bind(this);
    };
    
    update() {
        this.setState({
            val:this.state.val + 1
        });
    };
    render() {
        return <InnerComponent update={this.update}
                {...this.state} {...this.props}
                />
    };
}

const Button = (props) => <button 
                            onClick={props.update}>              {props.val}
                          </button>

const Label = (props) => <label onMouseMove={props.update}>
                            {props.val}
                        </label>
let LabelMixin = Mixin(Label);
let ButtonMixin = Mixin(Button);

class AppMixin extends React.Component {
    render(){
        return (
            <div> 
                <ButtonMixin />
                <LabelMixin />
            </div>
        );
    };
}

export default AppMixin