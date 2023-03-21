import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Child({child}) {

    useEffect(() => {
        if(child) {
            toast("Congratulations, Panda have " + (child) + " children");
        }
    }, [child]);

    useEffect(() => {
      toast.info("Welcome to my family, I am Panda Parent!")
    }, [])
    
    

    const createChild = (child) => {
        var children = [];
        for (let i = 0; i < child; i++) {
            children.push(<img src="/image/pandachild.png" alt="pandaChild" width="200px" height="200px" />)
        }
        return children;
    }

  return (
    <div class="border border-3 border-success m-5">
      <div>
        {createChild(child)}
      </div>
      <div class="badge text-bg-warning fs-5 m-4">
        I have {child} child
      </div>
      <ToastContainer />
    </div>
  )
}
