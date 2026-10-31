interface DashboardStatsProps {
    totalTasks: number;
    pendingTasks: number;
    inProgressTasks: number;
    completedTasks: number;
}

export default function DashboardStats(props: DashboardStatsProps) {
    return (
        <div className="dashboard-stats">
            <div className="stat-card">
                <h3>Total Tasks</h3>
                <p>{props.totalTasks}</p>
            </div>

            <div className="stat-card">
                <h3>Pending Tasks</h3>
                <p>{props.pendingTasks}</p>
            </div>

            <div className="stat-card">
                <h3>In Progress</h3>
                <p>{props.inProgressTasks}</p>
            </div>

            <div className="stat-card">
                <h3>Completed Tasks</h3>
                <p>{props.completedTasks}</p>
            </div>
        </div>
    );
}