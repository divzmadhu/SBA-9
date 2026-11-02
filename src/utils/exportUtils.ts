import type { Task } from "../types";

export function exportTasks(tasks: Task[]) {
    const jsonData = JSON.stringify(tasks, null, 2);

    const blob = new Blob([jsonData], {
        type: "application/json"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "worktrack-tasks.json";

    link.click();

    URL.revokeObjectURL(url);
}