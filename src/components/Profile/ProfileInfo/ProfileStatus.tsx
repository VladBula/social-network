import React, {ChangeEvent} from 'react';
import {AppStateType} from "../../../redux/redux-store";

type MyStateType = {
    editMode: boolean
    status:string
}

type PropsType = {
    status:string
    updateStatus:(status:string) => void
}

class ProfileStatus extends React.Component<PropsType, MyStateType>{
    state: MyStateType = {
        editMode: false,
        status:this.props.status
    }

    activateEditMode = () => {
debugger
        this.setState({
            editMode:true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode:false
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeStatusHandler = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status:e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: PropsType, prevState: MyStateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "---"}</span>
                </div>}


                {this.state.editMode &&
                    <div>
                        <input onChange={this.onChangeStatusHandler} autoFocus value={this.state.status} onBlur={this.deactivateEditMode}/>
                    </div>}
            </>
        );
    };
    }



export default ProfileStatus;