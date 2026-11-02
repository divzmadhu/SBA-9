import type { Task, TaskStatus, TaskPriority } from "../types";

export function filterTasks(
    tasks: Task[],
    filters: {
        status?: TaskStatus;
        priority?: TaskPriority;
    },
    searchTerm: string
): Task[] {
    return tasks.filter((task) => {
        return (
            (!filters.status || task.status === filters.status) &&
            (!filters.priority || task.priority === filters.priority) &&
            (
                !searchTerm ||
                task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                task.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    });
}