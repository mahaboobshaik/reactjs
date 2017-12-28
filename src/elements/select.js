import React, { Component } from 'react';

function OptionItem(props){
    return <option>{props.value}</option>
}

function OptionsList(props){
    const options = props.optionsList;
    const optionItems = options.map((option) =>
        <OptionItem key={option.toString()}
                value={option} />
    );
    return (optionItems);
}

class Select extends Component {
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event){
        this.props.onSelectChange(event);
    }
    render(){
        return (
            <select value={this.props.value} onChange={this.onChangeHandler}>
                <OptionsList optionsList={this.props.optionsList} />
            </select>
        );

    }
}

export default Select;

{/* <Select value={this.state.selected} onSelectChange={(e) => this.handleChange(e, 'test')} optionsList={this.state.values} /> */}
