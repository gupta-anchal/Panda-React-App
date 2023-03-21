import React, { useState } from 'react'
import Child from './child'

export default function Parent() {
    const [child, setChild] = useState(0);

    const isChildGenerated = () => {
        setChild(child + 1);
      }
    
  return (
    <div class="container">
      <div>
        <img src="/image/pandaparent.png" alt="PandaParent" width="300px" height="300px" />
      </div>
      <button type="button" class="btn btn-primary" onClick={isChildGenerated}>Generate New Child</button>
      <Child child={child}/>
    </div>
  )
}
