import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeAnimal } from './animalType'
import '../../styles/animal.css'
import { reset } from '../main/childCount'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Animal() {
  const count = useSelector((state) => state.counter.value);

  const childList = [
    { Animal: "Panda", Child: "Cub" },
    { Animal: "Lion", Child: "Cub" },
    { Animal: "Snake", Child: "Snakelets" },
    { Animal: "Cat", Child: "Kitten" },
    { Animal: "Penguin", Child: "Chick" },
    { Animal: "Dog", Child: "Puppy" }
  ]

  const Animal = useSelector((state) => state.animal.value);
  const dispatch = useDispatch();

  let childName = childList.filter((x)=>(x.Animal === Animal)).map((x)=>x.Child);

  const resetToast = () => {
    toast.success("Reset Successful");
  }

  return (
    <div>
    <div className="container-fluid w-50 mt-5">
      <select
        className="form-select"
        aria-label="Default select example"
        defaultValue={Animal}
        onChange={(e) => dispatch(changeAnimal(e.target.value))}
      >
        <option value="Lion">Lion</option>
        <option value="Cat">Cat</option>
        <option value="Snake">Snake</option>
        <option value="Panda">Panda</option>
        <option value="Dog">Dog</option>
        <option value="Penguin">Penguin</option>
      </select>
    </div>
    <div className="mt-5 display-6">
      <p>You have selected - <strong>{Animal}</strong></p>
    </div>
    <div className="mt-5">
      <h4>It has - <strong>{count}</strong> {childName}</h4>
    </div>
    <button type="button" className="btn btn-primary m-4" onClick={() => {dispatch(reset()); resetToast();}} hidden={!count}>Reset Children to ZERO</button>
    <ToastContainer />
    </div>
  );
}
