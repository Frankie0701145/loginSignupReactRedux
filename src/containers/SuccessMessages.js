import React from 'react';
import {connect} from 'react-redux';
import removeSuccessMessages from '../redux/actionCreators/removeSuccessMessages';

export const SuccessMessages = (props)=>{

    setTimeout(()=>{
        props.removeSuccessMessages();
    }, 5000);

    return(
        <div className='row green lighten-3 p-2'>
            <ul className="col">
                {
                  props.successMessages.map((successMessage,index)=>{ 
                    return (
                      <li key={index+=1} data-testid="successMessages"> { successMessage.successMessage} </li>) }
                    )
                }
            </ul>
            
        </div>
    )
};

const mapStateToProps=(state, ownProps)=>{
    return {
        successMessages: state.successMessages
    }
};

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        removeSuccessMessages: ()=>{dispatch(removeSuccessMessages())}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SuccessMessages);