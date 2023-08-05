const ReducerTasks = (state, action) => {
    switch (action.type) {
      case 'set':
        return action.tasks;
      case 'newTask':
        return [ ...state, { id: Math.random(), nameTask: action.nameTask, done: false } ];
      case 'removeTask':
        return state.filter((info) => info.id !== action.id);
      case 'removeAllTask':
        return state.filter((info) => !info.done);
      case 'checked':
        return state.map((info) => {
          if (info.id === action.id) {
            return { ...info, done: !info.done };
          }
          return info;
        });
      default:
        return state;
    }
  };
  export default ReducerTasks;