import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeAnimal } from './animalType'

export default function Animal() {
  const count = useSelector((state) => state.counter.value);

  const Animal = useSelector((state) => state.animal.value)
  const dispatch = useDispatch()

  return (
    <div>
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
      </select>
    </div>
  );
}
