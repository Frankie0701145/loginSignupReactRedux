import React from 'react';


const Signup = (props)=>{

    return(
        <div className="container"> 
              <div className="row">
                <form className="col s12">

                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate"/>
                            <label for="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate"/>
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>

                    <div className="row">
                        
                        <div className="input-field col s6">
                            <input  id="homeAddress" type="text" className="validate"/>
                            <label for="homeAddress">Home Address</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="workAddress" type="text" className="validate"/>
                            <label for="workAddress">Last Name</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate"/>
                            <label for="email">Email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate"/>
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate"/>
                            <label for="password">Password</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12" >
                            <button class="waves-effect waves-light btn">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
};
export default Signup;