import './App.css';
import { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import type { Task, TaskStatus } from "./types";

export default function App() {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Project Kickoff",
      description: "Project Manager: Conduct initial kickoff meeting with stakeholders and the assigned team to align on project objectives, scope, and deliverables.",
      status: "pending",
      priority: "high",
      dueDate: "2026-11-02"
    },

    {
      id: "2",
      title: "Review Scope",
      description: "Tech Lead: Analyze the project requirements document (PRD) and architecture specifications to identify technical risks and dependencies.",
      status: "pending",
      priority: "high",
      dueDate: "2026-11-03"
    },
    {
      id: "3",
      title: "Setup Repo",
      description: "DevOps Engineer: Initialize the version control repository (GitHub/GitLab), configure main/dev branch protection, and set up CI/CD pipelines.",
      status: "pending",
      priority: "high",
      dueDate: "2026-11-03"
    },
    {
      id: "4",
      title: "Draft Backlog",
      description: "Project Manager: Breakdown high-level deliverables into user stories and granular task tickets within the project tracker (Jira/Trello).",
      status: "pending",
      priority: "medium",
      dueDate: "2026-11-04"
    },
    {
      id: "5",
      title: "Setup Env",
      description: "Backend / Frontend Devs: Configure local development environments, clone repositories, and verify database and service access permissions.",
      status: "pending",
      priority: "medium",
      dueDate: "2026-11-04"
    },
    {
      id: "6",
      title: "UI Design Sync",
      description: "UI/UX Designer: Share wireframes and component library guidelines with developers to establish design-to-code expectations.",
      status: "pending",
      priority: "medium",
      dueDate: "2026-11-05"
    },
    {
      id: "7",
      title: "Sprint Plan",
      description: "Whole Team: Estimate task points, assign ticket ownership for Sprint 1, and commit to initial sprint goals.",
      status: "pending",
      priority: "high",
      dueDate: "2026-11-06"
    },
    {
      id: "8",
      title: "Draft Specs",
      description: "Tech Lead: Write baseline API documentation and initial README setup guides for onboarding future team members.",
      status: "pending",
      priority: "low",
      dueDate: "2026-11-09"
    },
    {
      id: "9",
      title: "Client Signoff",
      description: "Project Manager: Present the finalized project timeline, architecture review, and Sprint 1 scope to the client or executive sponsor for formal approval.",
      status: "pending",
      priority: "high",
      dueDate: "2026-11-10"
    }

  ]);

  // const [filters, setFilters] = useState<{ status?: TaskStatus }>({});

  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }>({});

  // const filteredTasks = tasks.filter((task) => {
  //   return !filters.status || task.status === filters.status;
  // });

  const filteredTasks = tasks.filter((task) => {
    return (
      (!filters.status || task.status === filters.status) &&
      (!filters.priority || task.priority === filters.priority)
    );
  });

  // Function to update the task status
  function handleStatusChange(taskId: string, newStatus: TaskStatus) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    );
  }

  function handleDelete(taskId: string) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  }
  return (
    <div>
      {/* <h1>Lab 3- Lists, Keys, and Conditionals</h1> */}
      <h2>WorkTrack - Task Management System</h2>

      <div className="task-list">
        {/* <h3>Task List</h3> */}


        <TaskFilter onFilterChange={(newFilters) => setFilters(newFilters)} />
        <div className="tasklist-box">
          <TaskList
            tasks={filteredTasks}
            totalTasks={tasks.length}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />

          {/* <TaskList
            tasks={filteredTasks}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          /> */}

        </div>

      </div>
    </div>
  );
}
