import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Count() {
    const count = useSelector((state)=>{
        return state.count
    });

    const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch({
            type:'decrement'
        })}>-</button>
        <h3>{count}</h3>
        <button onClick={()=>dispatch({
            type:'increment'
        })}>+</button>
    </div>
  )
}

export default Count