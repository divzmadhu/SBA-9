import { useState } from "react";
import type { TaskFilterProps, TaskStatus, TaskPriority, SortOption } from "../../types";

export default function TaskFilter(props: TaskFilterProps) {
    const [selectedStatus, setSelectedStatus] = useState<TaskStatus | "">("");
    const [selectedPriority, setSelectedPriority] = useState<
       TaskPriority | "">("");

    return (

        <div className="task-filter">
            {/* <h3>Filter Tasks</h3> */}


            <div className="filter-controls">
                <div>
                    <label htmlFor="status-filter">Filter by Status:</label>
                    <select
                        id="status-filter"
                        onChange={(event) => {
                            const status = event.target.value as TaskStatus | "";
                            setSelectedStatus(status);

                            props.onFilterChange({
                                status: status || undefined,
                                priority: selectedPriority || undefined
                            });
                        }}
                    
                    >
                        <option value="">All Statuses</option>
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="priority-filter">Filter by Priority: </label>
                    <select
                        id="priority-filter"
                        onChange={(event) => {
                            const priority = event.target.value as TaskPriority | "";
                            setSelectedPriority(priority);

                            props.onFilterChange({
                                status: selectedStatus || undefined,
                                priority: priority || undefined
                            });
                        }}

                    >
                        <option value="">All Priorities</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

                {/* Sort tasks */}

                <div>
                    <label htmlFor="sort-tasks">Sort by:</label>
                    <select
                        id="sort-tasks"
                        value={props.sortBy}
                        onChange={(event) =>
                            props.onSortChange(
                               
                                event.target.value as SortOption
                            )
                        }
                    >
                        <option value="dueDate">Due Date</option>
                        <option value="priority">Priority</option>
                        <option value="title">Title</option>
                    </select>
                </div>

                <div className="filter-search">
                    <label htmlFor="task-search">Search:</label>
                    <input
                        id="task-search"
                        type="text"
                        placeholder="Search tasks..."
                        value={props.searchTerm}
                        onChange={(event) => props.onSearchChange(event.target.value)}
                    />
                </div>
            </div>

            {(selectedStatus || selectedPriority || props.searchTerm) && (
                <div className="active-filters">
                    <strong>Active filters:</strong>

                    {selectedStatus && (
                        <span>Status: {selectedStatus}</span>
                    )}

                    {selectedPriority && (
                        <span>Priority: {selectedPriority}</span>
                    )}

                    {props.searchTerm && (
                        <span>Search: {props.searchTerm}</span>
                    )}
                </div>
            )}

        </div >
    );
}
