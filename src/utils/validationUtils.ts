export function validateTaskForm(title: string, dueDate: string) {
    const errors = {
        titleError: "",
        dueDateError: ""
    };

    if (!title.trim()) {
        errors.titleError = "Task title is required.";
    }

    if (!dueDate) {
        errors.dueDateError = "Due date is required.";
    }

    return errors;
}