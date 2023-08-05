const { useState, useEffect } = require("react");

const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('yourTasks')) || []);


const newTask = (name) => {
  setTasks([...tasks, {id: Math.random(), nameTask: name, done: false}]);
}

const checked = (id) => {
  const changeDone = tasks.map((info) => {
    if (info.id === id){
      return {...info, done: !info.done};
    }
    return info;
  })
  setTasks(changeDone);
}

const [value, setValue] = useState('one');
const handleChange = (e, newEvent) => {
  setValue(newEvent);
}

const changeScreen = () => {
  switch(value){
    case 'two':
      return <Active/>
    case 'three':
      return <Completed/>
    default:
      return <All/>
  }
}


const removeTask = (id) => {
  setTasks(tasks.filter((info) => info.id !== id));
}

const removeAllTasks = () => {
  setTasks(tasks.filter((info) => !info.done));
}

useEffect(() => {
  localStorage.setItem('yourTasks', JSON.stringify(tasks));
}, [tasks])