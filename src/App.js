import Header from "./components/Header";
import Tasks from "./components/Tasks.jsx";
import { useState } from "react"
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
       id: 1,
       text: "Alisveris",
       day: "5th Feb at 2:30pm",
       reminder: true
   },
   {
       id: 2,
       text: "Yemek",
       day: "5th Feb at 4:30pm",
       reminder: false
   },
   {
       id: 3,
       text: "Oyle",
       day: "6th Feb at 2:30pm",
       reminder: true
   },
 ])

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id===id ? { ...task, reminder: !task.reminder  } : task))
  }

  //Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1 
    const newTask = {id, ...task};
    setTasks([...tasks, newTask])
  }
  
  return (
    <div className="container">
      
      <Header title="Task Tracker" onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask ? <AddTask onAdd={addTask}/> : '' }
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />  : 'No Tasks today.'}
      
    </div>
  );
}

export default App;
