import store from './redux/store';
import { useRef, useState } from 'react';

function Lesson() {
  const [tasks, setTasks] = useState(store.getState());
  const inputRef = useRef();
  const allTasks = useRef();

  const clickHandler = () => {
    const task = {
      text: inputRef.current.value,
      done: false,
    };

    inputRef.current.value = '';

    store.dispatch({
      type: 'ADD_TASK',
      task,
    });

    console.log(store.getState());
  };

  const doneHandler = (task) => {
    store.dispatch({
      type: 'DONE_TASK',
      id: task.id,
    });
  };

  const showDoneTasks = () => {
    allTasks.current = store.getState();
    store.dispatch({
      type: 'SHOW_DONE',
    });
  };

  const showAll = () => {
    store.dispatch({
      type: 'SHOW_ALL',
      tasks: allTasks.current,
    });
  };

  store.subscribe(() => {
    setTasks(store.getState());
  });

  return (
    <div>
      <input type="text" ref={inputRef}></input>
      <button onClick={clickHandler}>Add</button>
      <button onClick={showDoneTasks}>Done Tasks</button>
      <button onClick={showAll}>All Tasks</button>
      <hr />
      {tasks.map((task) => (
        <p
          onClick={() => doneHandler(task)}
          key={task.id}
          style={{ color: task.done ? 'red' : '' }}
        >
          {task.text}
        </p>
      ))}
    </div>
  );
}

export default Lesson;
