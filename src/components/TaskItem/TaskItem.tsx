import type { TaskItemProps } from "../../types";


export default function TaskItem(props: TaskItemProps) {
    return (


        // <h2>Task Item</h2>
        <>

            <div className="task-item">


                <div className="task-header">
                    <p>Task {props.task.id}</p>


                    <div className="task-status">
                        <label htmlFor={`task-status-${props.task.id}`}>Status:</label>
                        <select
                            id={`task-status-${props.task.id}`}
                            value={props.task.status}
                            onChange={(event) =>
                                props.onStatusChange(
                                    props.task.id,
                                    event.target.value as "pending" | "in-progress" | "completed"
                                )
                            }
                        >
                            <option value="pending">Pending</option>
                            <option value="in-progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                </div>

                <h2>{props.task.title}</h2>
                <p>Description: {props.task.description}</p>
                <div className="task-details">

                    {/* Apply a CSS class based on the task's priority. */}
                    <p className={`priority-${props.task.priority}`}>
                        Priority: {props.task.priority}
                    </p>

                    {/* <p>Priority: {props.task.priority}</p> */}
                    <p>Due : {props.task.dueDate}</p>
                </div>

                {/* Style the delete button to stand out. */}
                <button className="delete-button"
                    onClick={() => props.onDelete(props.task.id)}>
                    Delete
                </button>


            </div>
        </>

    );
}