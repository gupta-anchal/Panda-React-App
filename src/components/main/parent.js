import React from 'react'
import Child from './child'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './childCount'

export default function Parent() {

  const Animal = useSelector((state) => state.animal.value)

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
    
  return (
    <div className="container">
      <div>
        <img src="/image/pandaparent.png" alt="PandaParent" width="300px" height="300px" />
      </div>
      <button type="button" className="btn btn-primary" onClick={() => dispatch(increment())}>Generate New Child</button>
      <Child child={count}/>
    </div>
  )
}
