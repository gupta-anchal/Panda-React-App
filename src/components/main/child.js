import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/child.css";
import { useSelector } from 'react-redux';

var color = [
  "lightblue",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgrey",
  "lightyellow",
  "lightpink",
  "mistyrose",
  "moccasin",
  "oldlace",
  "palegoldenrod",
  "papayawhip",
  "wheat",
  "whitesmoke",
  "mintcream",
  "lightsteelblue",
  "lightsalmon",
  "khaki",
  "antiquewhite",
];

export default function Child({ child }) {

  const Animal = useSelector((state) => state.animal.value)

  useEffect(() => {
    if (child) {
      toast("Congratulations, " + Animal + " has " + child + " children");
    }
    document.body.style.background =
      color[Math.floor(Math.random() * color.length)];
  }, [child]);

  useEffect(() => {
    toast.info('Welcome to my family, I am ' + Animal + ' Parent!', {
      position: "top-left"
    });
  }, []);

  const createChild = (child) => {
    var children = [];
    for (let i = 0; i < child; i++) {
      children.push(
        <img
          className="zoom"
          src={"/image/"+Animal+"Child.gif"}
          alt="AnimalChild"
          width="200px"
          height="200px"
          key={i}
        />
      );
    }
    return children;
  };

  return (
    <div className="border border-3 border-success m-5">
      <div>{createChild(child)}</div>
      <div className="badge text-bg-warning fs-5 m-4">{Animal} has {child} child</div>
      <ToastContainer />
    </div>
  );
}
