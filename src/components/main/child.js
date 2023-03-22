import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/child.css";

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
  //destructuring

  const images = [
    "/image/pandaChild2.gif",
    "/image/pandaChild3.gif",
    "/image/pandaChild4.gif",
    "/image/pandaChild5.gif",
    "/image/pandaChild6.gif",
    "/image/pandaChild7.gif",
  ];

  useEffect(() => {
    if (child) {
      toast("Congratulations, Panda have " + child + " children");
    }
    document.body.style.background =
      color[Math.floor(Math.random() * color.length)];
  }, [child]);

  useEffect(() => {
    toast.info("Welcome to my family, I am Panda Parent!");
  }, []);

  const createChild = (child) => {
    var children = [];
    for (let i = 0; i < child; i++) {
      children.push(
        <img
          className="zoom"
          src={images[Math.floor(Math.random() * images.length)]}
          alt="pandaChild"
          width="200px"
          height="200px"
        />
      );
    }
    return children;
  };

  return (
    <div class="border border-3 border-success m-5">
      <div>{createChild(child)}</div>
      <div class="badge text-bg-warning fs-5 m-4">Panda has {child} child</div>
      <ToastContainer />
    </div>
  );
}
