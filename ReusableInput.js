import React from 'react';

class NumberInput extends React.Component {
    render() {
        return (
            <input 
                type={this.props.type}
                min={this.props.min}
                max={this.props.max}
                defaultValue={this.props.val}
                onChange={this.props.update}
            />
        );
    }
}

NumberInput.propTypes = {
    min:React.PropTypes.number,
    max:React.PropTypes.number,
    val:React.PropTypes.number,
    update:React.PropTypes.func.isRequired,
    type:React.PropTypes.oneOf(['number','range'])
};
NumberInput.defaultProps = {
    type:'number',
    min:0,
    max:255,
    val:1
};


export default NumberInput;