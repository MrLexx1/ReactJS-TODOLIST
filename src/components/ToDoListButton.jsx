function ToDoListButton(props) {
  let id = props.id;
  let currentIndex = props.tasks.findIndex((item) => item.id == id);
  let prevIndex = currentIndex - 1;
  let nextIndex = currentIndex + 1;

  let prevButton = "";
  if (props.tasks[prevIndex] != undefined) {
    prevButton = "👆";
  } else {
    prevIndex = "";
  }

  let nextButton = "";
  if (props.tasks[nextIndex] != undefined) {
    nextButton = "👇";
  } else {
    nextIndex = "";
  }

  return (
    <>
      <span>
        <button onClick={() => props.move(currentIndex, prevIndex)}>
          {prevButton}
        </button>
      </span>
      <span>
        <button onClick={() => props.move(currentIndex, nextIndex)}>
          {nextButton}
        </button>
      </span>
      <span>
        <button onClick={() => props.remove(props.id)}>🗑️</button>
      </span>
    </>
  );
}

export default ToDoListButton;
