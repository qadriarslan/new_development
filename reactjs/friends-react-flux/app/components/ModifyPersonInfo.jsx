import React from 'react'

class ModifyPersonInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            profession: ""
        };
    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }

    handleProfessionChange(e) {
        this.setState({profession: e.target.value})
    }

    handleClick() {
        if(this.state.name !== "" && this.state.profession !== "") {
            this.props.modifyPersonInfo(this.state.name, this.state.profession);
            this.setState({name: "", profession: ""});
        } else {
            alert("Name and Profession can't be empty.")
        }
    }

    render() {
        return (
            <div>
                <div>
                    Name: <input type="text" value={this.state.name} placeholder="Name" onChange={this.handleNameChange.bind(this)}/>
                </div>
                <div>
                    Profession: <input type="text" value={this.state.profession} placeholder="Profession" onChange={this.handleProfessionChange.bind(this)}/>
                </div>
                <button onClick={this.handleClick.bind(this)}>Modify Person Info</button>
            </div>
        )
    }
}

ModifyPersonInfo.propTypes = {
    modifyPersonInfo: React.PropTypes.func.isRequired
};

export default ModifyPersonInfo