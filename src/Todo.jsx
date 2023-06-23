import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import uncheckedImage from "./assets/empty-tic.png";
import checkedImage from "./assets/full-tic.png";

const style = {
  li: `flex justify-between items-center pl-5 bg-[url(./assets/li-bg.png)] h-24 bg-cover my-2 capitalize`,
  liComplete: `flex justify-between items-center pl-5 bg-[url(./assets/li-bg.png)] h-24 bg-cover  my-2 capitalize`,
  row: `flex`,
  text: ` text-white ml-6 cursor-pointer`,
  textComplete: `ml-6 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
  checkbox: `hidden`,
  deletebtn: `text-[#EFB833] mr-6`,
};

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div>
        <label className={style.row}>
          <input
            onChange={() => toggleComplete(todo)}
            type="checkbox"
            checked={todo.completed ? "checked" : ""}
            className={style.checkbox}
          />
          <img
            src={todo.completed ? checkedImage : uncheckedImage}
            alt={todo.completed ? "Checked" : "Unchecked"}
          />
          <p
            onClick={() => toggleComplete(todo)}
            className={todo.completed ? style.textComplete : style.text}
          >
            {todo.text}
          </p>
        </label>
      </div>
      <button className={style.deletebtn} onClick={(e) => deleteTodo(todo.id)}>
        {<FaRegTrashAlt />}
      </button>
    </li>
  );
};

export default Todo;
