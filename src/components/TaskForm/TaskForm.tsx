import { useState, useEffect } from "react";
import type { TaskFormProps, TaskPriority } from "../../types";
import { validateTaskForm } from "../../utils/validationUtils";

export default function TaskForm(props: TaskFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState<TaskPriority>("medium");
    const [dueDate, setDueDate] = useState("");

    // Store validation error messages for the form fields
    const [titleError, setTitleError] = useState("");
    const [dueDateError, setDueDateError] = useState("");

    // Populate the form fields with the selected task details when editing.
    useEffect(() => {
        if (props.taskToEdit) {
            setTitle(props.taskToEdit.title);
            setDescription(props.taskToEdit.description);
            setPriority(props.taskToEdit.priority);
            setDueDate(props.taskToEdit.dueDate);
        }
    }, [props.taskToEdit]);


    // Function to reset all form fields to their initial values
    function resetForm() {
        setTitle("");
        setDescription("");
        setPriority("medium");
        setDueDate("");
        setTitleError("");
        setDueDateError("");
    }

    //Creating a handleSubmit function that will run when the user submits by clicking the Add Task button
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const taskData = {
            title: title,
            description: description,
            priority: priority,
            dueDate: dueDate
        }

        const errors = validateTaskForm(title, dueDate);

        setTitleError(errors.titleError);
        setDueDateError(errors.dueDateError);

        if (errors.titleError || errors.dueDateError) {
            return;
        }
        
        if (props.taskToEdit) {
            // Update the selected task
            props.onUpdateTask(props.taskToEdit.id, taskData);
        } else {
            // Add a new task
            props.onAddTask(taskData);
        }

        resetForm();

    }

    return (

        <form className="task-form" onSubmit={handleSubmit}>
            <h2>{props.taskToEdit ? "Edit Task" : "Add New Task"}</h2>

            <div className="form-top-row">
                <div className="form-group">
                    <label htmlFor="task-title"> Task Title</label>
                    <input
                        type="text"
                        id="task-title"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                            setTitleError("");
                        }}
                    />
                    {titleError && <p className="error-message">{titleError}</p>}
                </div>



                <div className="form-group">
                    <label htmlFor="task-priority">Priority:</label>
                    <select
                        id="task-priority"
                        value={priority}
                        onChange={(event) => setPriority(event.target.value as TaskPriority)}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="task-due-date">Due Date:</label>
                    <input
                        type="date"
                        id="task-due-date"
                        value={dueDate}
                        onChange={(event) => {
                            setDueDate(event.target.value);
                            setDueDateError("");
                        }}
                    />
                    {dueDateError && <p className="error-message">{dueDateError}</p>}
                </div>

            </div>
            <div className="form-group">
                <label htmlFor="task-description">Description:</label>
                <textarea
                    id="task-description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </div>


            <button type="submit">
                {props.taskToEdit ? "Confirm Edit" : "Add Task"}
            </button>



        </form >

    );
}