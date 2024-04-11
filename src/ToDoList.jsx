import React , {useState} from 'react'
function ToDoList(){
    const [tasks,setTasks] = useState([]);
    const [newTask, setNewtask] = useState("");

    function handleInputChange(event){
        setNewtask(event.target.value);
    }
    function addTask(){
        if(newTask.trim !== ""){
            setTasks(t =>[...t,newTask]);
            setNewtask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index >0){
            const updatedTaks = [...tasks];
            [updatedTaks[index],updatedTaks[index-1]] = 
            [updatedTaks[index -1 ],updatedTaks[index]];
            setTasks(updatedTaks);
        }
    }
    function moveTaskDown(index){
        if(index <tasks.length -1){
            const updatedTaks = [...tasks];
            [updatedTaks[index],updatedTaks[index+1]] = 
            [updatedTaks[index +1 ],updatedTaks[index]];
            setTasks(updatedTaks);
        }
    }
    return(
    <div className = "to-do-list">

        <h1>To-Do-List</h1>

        <div>
            <input 
                type="text" 
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleInputChange}/>
            <button
                className='add-button'
                onClick={addTask}>
                Add
            </button>
        </div>

        <ol>
            {tasks.map((task,index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className='delete-button'
                        onClick={()=>deleteTask(index)}>
                        Delete
                    </button>
                    <button className='move-button'
                        onClick={()=>moveTaskUp(index)}>
                        👆🏻
                    </button>
                    <button className='move-button'
                        onClick={()=>moveTaskDown(index)}>
                        👇🏻
                    </button>
                </li>
            )}
        </ol>

    </div>);
}
export default ToDoList