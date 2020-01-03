import React from 'react';


const Signup = (props)=>{

    return(
        <div className="container"> 
              <div className="row">
                <form className="col s12">

                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate"/>
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate"/>
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>

                    <div className="row">
                        
                        <div className="input-field col s6">
                            <input  id="homeAddress" type="text" className="validate"/>
                            <label htmlFor="homeAddress">Home Address</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="workAddress" type="text" className="validate"/>
                            <label htmlFor="workAddress">Last Name</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate"/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12" >
                            <button className="waves-effect waves-light btn">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
};
export default Signup;