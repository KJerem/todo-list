import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import todoLogo from "./../../assets/todoLogo.svg";
import styles from "./header.module.css";

const Header = ({onAddTask}) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    onAddTask(title);
    setTitle('');
  }
  const changeTitle = (event) =>{
    setTitle(event.target.value);
  }
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="todoLogo" />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="add a new task" type="text" value={title} onChange={changeTitle} />
        <button>
          Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;
