import React from 'react';



const Errors = (props)=>{
    return(
        <div className='row'>
            <ul>
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