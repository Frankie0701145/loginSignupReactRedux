import React from 'react';



const Errors = (props)=>{
    return(
        <div className='row red lighten-3 p-2'>
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