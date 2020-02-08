import React from 'react';



const Errors = (props)=>{
    console.log(props);
    return(
        <div className='row red lighten-3 p-2'>
            <span className="col">
                <button className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">clear</i></button>
            </span>
            <ul className="col">
                {
                  props.errors.map((err,index)=>{ 
                    return (
                      <li key={index+=1} data-testid="errors"> { err.errorMessage} </li>) }
                    )
                }
            </ul>
            
        </div>
    )
}

export default Errors;