import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {

    let [Tasks, setTasks] = useState([{ task: "sample task", id: uuidv4() }]);

    function updateTask(e) {
        e.preventDefault();
        let T = e.target.elements[0].value;
        if (T == "") return (console.log("no task name"));
        console.log(T);
        let ob = { task: T, id: uuidv4() };
        setTasks([...Tasks, ob]);
        e.target.elements[0].value = "";
    }  

    let Delete = (id) => {
        setTasks(Tasks.filter((task) => task.id != id));
        console.log("task deleted!!");
    }
    let DeleteAll = () => {
        setTasks([]);
        console.log(" All task deleted!!");
    }

    let complete = (id) => {
        setTasks(
            Tasks.map((task) =>
                task.id === id ? { ...task, completed: true } : task
            )
        );
    };
    let completeAll = (id) => {
        setTasks(
            Tasks.map((task) =>(
                { ...task, completed: true }
            ))
        );
    };

    let upper = (id) => {
        setTasks(Tasks.map((task) => (task.id == id ? { ...tasks, task: task.task.toUpperCase() } : task)));
    }
    let upperAll = (id) => {
        setTasks(Tasks.map((task) => ({ ...task, task: task.task.toUpperCase() })));
    }


    return (
        <div className="todo-container">
            <h2>To Do's</h2>
           
            <br /><br />
            <form id="from1" action="todo/hello" onSubmit={updateTask}>
                <input type="text" placeholder="new task..." />
                <button type="submit">add</button>
            </form>
           
            <ul>
                {
                    Tasks.map((task) => (
                        <li >
                            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.task}</span>
                            <button onClick={()=>{complete(task.id)}}>complete</button>
                            <button onClick={() => { Delete(task.id) }}>Delete</button>
                        </li>


                    )
                    )
                }
            </ul>
            <div className="todo-footer">
            <button onClick={DeleteAll}>DeleteAll</button>
            <button onClick={completeAll}>CompletedAll</button>
            </div>
        </div>
    );

}


export default TodoApp;