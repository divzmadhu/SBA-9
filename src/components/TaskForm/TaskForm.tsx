import { useState } from "react";
import type { TaskFormProps } from "../../types";

export default function TaskForm(props: TaskFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
    const [dueDate, setDueDate] = useState("");


    // Function to reset all form fields to their initial values
    function resetForm() {
        setTitle("");
        setDescription("");
        setPriority("medium");
        setDueDate("");
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

        if (!title.trim() || !dueDate) {
            alert("Please enter a task title and a due Date.");
            return;
        }

        props.onAddTask(taskData);

        resetForm();

       
    }

    return (
        <form className="task-form" onSubmit = {handleSubmit}>
            <h3>Add New Task</h3>
            <div>
                <label htmlFor="task-title"> Task Title</label>
                <input
                    type="text"
                    id="task-title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <div>
                    <label htmlFor="task-description">Description:</label>
                    <textarea
                        id="task-description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="task-priority">Priority:</label>
                    <select
                        id="task-priority"
                        value={priority}
                        onChange={(event) => setPriority(event.target.value as "low" | "medium" | "high")}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="task-due-date">Due Date:</label>
                    <input
                        type="date"
                        id="task-due-date"
                        value={dueDate}
                        onChange={(event) => setDueDate(event.target.value)}
                    />
                </div>

                <button type = "submit">Add Task</button>

            </div>

        </form>

    );
}