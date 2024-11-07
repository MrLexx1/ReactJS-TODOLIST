function Form(props) {
  return (
    <div className="wrapper">
      <header>
        <h3> ⚜ ToDoList Harian</h3>
        <span>
          {props.taskCompleted || "0"} / {props.tasks.length}
        </span>
      </header>

      <form className="input-box">
        <input type="text" ref={props.newTask} placeholder="Add Your Task" />
        <button type="submit" onClick={props.addTask}>
          Add Task
        </button>
      </form>
    </div>
  );
}

export default Form;
