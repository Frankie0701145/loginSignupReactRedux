import React, {Component} from 'react';

class Login extends Component {
    render(){
        return(
            <div className="container"> 
                <div className="row">
                    <form className="col s12">
    
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


export default Login;