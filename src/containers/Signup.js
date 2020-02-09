import React, {Component} from 'react';
import { connect } from 'react-redux';
import addErrors from '../redux/actionCreators/addErrors';
import removeErrors from '../redux/actionCreators/removeErrors';
import ErrorComponent from '../components/Errors';


export class Signup extends Component{

    submit = (e)=>{
        e.preventDefault();
        let password =  e.target.password.value;
        let confirmPassword = e.target.confirmPassword.value;
        let userDetails = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            homeAddress: e.target.homeAddress.value,
            workAddress: e.target.workAddress.value,
            password: password
        }
        
        if(password !== confirmPassword){
            let errors = [{
                errorMessage: "The password and confirm password don't match"
            }];
            this.props.addErrors(errors);
        }
    }

    render(){
        return(
            <div className="container"> 
                <div className="row">
                    <form className="col s12" method="POST" onSubmit={this.submit}>

                    {this.props.errors.length> 0 ? <ErrorComponent errors={this.props.errors} removeErrors={this.props.removeErrors}/>: "All is good"}
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="firstName" name="firstName" type="text" className="validate" data-testid="firstName" required={true}/>
                                <label htmlFor="firstName">First Name</label>
                                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                            <div className="input-field col s6">
                                <input id="lastName" name="lastName" type="text" className="validate" data-testid="lastName" required={true} />
                                <label htmlFor="lastName">Last Name</label>
                                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>

                        <div className="row">
                            
                            <div className="input-field col s6">
                                <input  id="homeAddress" name="homeAddress" type="text" className="validate" data-testid="homeAddress" required={true}/>
                                <label htmlFor="homeAddress">Home Address</label>
                                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>

                            <div className="input-field col s6">
                                <input id="workAddress" name="workAddress" type="text" className="validate" data-testid="workAddress" required={true} />
                                <label htmlFor="workAddress">Work Address</label>
                                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" name="email" className="validate" data-testid="email" required={true} />
                                <label htmlFor="email">Email</label>
                                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="password" name="password" type="password" className="validate" data-testid="password" required={true}/>
                                <label htmlFor="password">Password</label>
                                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                            <div className="input-field col s6">
                                <input id="confirmPassword" name="confirmPassword" type="password" className="validate" required={true} data-testid="confirmPassword" />
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12" >
                                <button className="waves-effect waves-light btn" data-testid="signupBtn">Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
};

const mapStateToState = (state, ownProps)=>{
    return ({
        signedIn: state.signedIn,
        isFetching: state.isFetching,
        errors:  state.errors
    });
}

const mapDispatchToState = (dispatch, ownProps)=>{
    return({
        addErrors: (errors)=>{dispatch(addErrors(errors))},
        removeErrors: ()=>{dispatch(removeErrors())}
    })
}

export default connect(mapStateToState, mapDispatchToState)(Signup);