import React from 'react'
import Child from './child'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from "react-toastify";
import { increment, reset } from './childCount'

export default function Parent() {

  const Animal = useSelector((state) => state.animal.value)

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const resetToast = () => {
    toast.success("Reset Successful");
  }
    
  return (
    <div className="container">
      <div>
        <img src={"/image/"+Animal+"Parent.png"} alt="AnimalParent" width="300px" height="300px" />
      </div>
      <button type="button" className="btn btn-primary m-4" onClick={() => dispatch(increment())}>Generate New Child</button>
      <button type="button" className="btn btn-primary m-4" onClick={() => {dispatch(reset()); resetToast();}} hidden={!count}>Reset</button>
      <Child child={count}/>
      <ToastContainer />
    </div>
  )
}
