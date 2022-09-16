import React from "react";
import MainLayout from '../layouts/MainLayout';
import NavBarDashboard from '../components/NavBarDashboard';
import DashboardLayout from '../layouts/dashboard/DashboardLayout';


function Dashboard() {
    return (
        <MainLayout>
            <NavBarDashboard />
                <DashboardLayout  />
        </MainLayout>
    )
}

export default Dashboard