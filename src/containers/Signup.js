import React from 'react';


const Signup = (props)=>{

    return(
        <div className="container"> 
              <div className="row">
                <form className="col s12" method="POST">

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
};
export default Signup;