let i = 0;

export default function reducer(store = [], action) {
  if (action.type === 'ADD_TASK') {
    return [...store, { ...action.task, id: i++ }];
  } else if (action.type === 'DONE_TASK') {
    return store.map((el) =>
      el.id === action.id ? { ...el, done: !el.done } : el
    );
  } else if (action.type === 'SHOW_DONE') {
    return store.filter((el) => el.done);
  } else if (action.type === 'SHOW_ALL') {
    return [...action.tasks];
  }
  return [...store];
}
