import { useState } from "react";
import type { TaskFormProps } from "../../types";

export default function TaskForm(props: TaskFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="task-form">
            <h3>Add New Task</h3>
            <div>
                <label htmlFor="task-title"> Task Title</label>
                <input
                    type="text"
                    id="task-title"
                    value={title}
                    onChange={(event) =>setTitle(event.target.value)}
                />

                <div>
                    <label htmlFor="task-description">Description:</label>
                    <textarea
                        id="task-description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>

            </div>

        </div>

    );
}