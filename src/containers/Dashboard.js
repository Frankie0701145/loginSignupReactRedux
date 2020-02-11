import React, {Component} from 'react';
import {connect} from 'react-redux';
import SuccessMessages from './SuccessMessages';
import removeSuccessMessages from '../redux/actionCreators/removeSuccessMessages';

export class Dashboard extends Component {
    render(){
        return(
            <div className="container">
                {this.props.successMessages.length> 0 ? <SuccessMessages successMessages={this.props.removeSuccessMessages} removeSuccessMessages={this.props.removeSuccessMessages}/>: ""}
                <div className="row">
                    Home
                </div>
            </div>
        )
    }
} 

const mapStateToProps = (state, ownProps)=>{
    return {
        successMessages: state.successMessages
    }
};

const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        removeSuccessMessages: ()=>{dispatch(removeSuccessMessages())}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);