import React from 'react';


const Login = (props)=>{
    return(
        <div className="container"> 
            <div className="row">
                <form className="col s12">

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
                        <div className="input-field col s12" >
                            <button class="waves-effect waves-light btn">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;