import React, {Component} from 'react';
import { connect } from 'react-redux';
import addErrors from '../redux/actionCreators/addErrors';
import login from '../redux/actionCreators/login';
import ErrorComponent from '../components/Errors';


export class Login extends Component {


    submit = (e)=>{
       e.preventDefault();
       let password = e.target.password.value;
       let confirmPassword = e.target.confirmPassword.value;
       if(password !== confirmPassword){
           let errors = [{
               errorName: "ValidationError",
               errorMessage: "The password does not match confirm password"
           }];
           this.props.addErrors(errors);
       }
    }
    
    render(){
        return(
            <div className="container"> 
                
                <div className="row">
                    <form className="col s12" onSubmit={this.submit} method='POST'>

                        {this.props.errors.length> 0 ? <ErrorComponent errors={this.props.errors}/>: "All is good"}

                        <div className="row">
                            <div className="input-field col s12">
                            <input id="email" name="email" type="email" className="validate" data-testid="email" required={true}/>
                            <label htmlFor="email">Email</label>
                            <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>
    
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" name="password" type="password" className="validate" data-testid="password" required={true}/>
                                <label htmlFor="password">Password</label>
                                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="confirmPassword" name="confirmPassword" type="password" className="validate" data-testid="confirmPassword" required={true}/>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="input-field col s12" >
                                <button className="waves-effect waves-light btn" data-testid="loginBtn">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps)=>{
    return {
        signedIn: state.signedIn,
        isFetching: state.isFetching,
        errors: state.errors
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        addErrors: (errors)=>{dispatch(addErrors(errors))},
        login: (credential)=>{dispatch(login(credential))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);