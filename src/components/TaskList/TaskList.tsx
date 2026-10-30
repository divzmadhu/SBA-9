import type { TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem";



export default function TaskList(props: TaskListProps) {
    return (

        <div>
            {props.tasks.length === 0 ? (
                props.totalTasks === 0 ? (
                    <p>No tasks available. Add a task to get started!</p>
                ) : (
                    <p>No tasks match your selected filters.</p>
                )
            ) : (
                props.tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onStatusChange={props.onStatusChange}
                        onDelete={props.onDelete}
                    />
                ))
            )}
        </div>
        // <div>
        //     {props.tasks.length === 0 ? (
        //         <p>No tasks available. Add a task to get started!</p>
        //     ) : (
        //         props.tasks.map((task) => (
        //             <TaskItem
        //                 key={task.id}
        //                 task={task}
        //                 onStatusChange={props.onStatusChange}
        //                 onDelete={props.onDelete}
        //             />
        //         ))
        //     )}
        // </div>

        // <div>
        //     {props.tasks.map((task) => (
        //         <TaskItem
        //             key={task.id}
        //             task={task}
        //             onStatusChange={props.onStatusChange}
        //             onDelete={props.onDelete}

        //         />

        //     ))}
        // </div>

    );
}