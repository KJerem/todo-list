import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import todoLogo from "./../../assets/todoLogo.svg";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="todoLogo" />

      <form className={styles.newTaskForm}>
        <input placeholder="add a new task" type="text" />
        <button>
          Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;
