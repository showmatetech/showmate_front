import React from "react";
import MainLayout from '../layouts/MainLayout';
import NavBarDashboard from '../components/NavBarDashboard';
import DashboardLayout from '../layouts/dashboard/DashboardLayout';


function Dashboard(props) {
    const { token } = props
    return (
        <MainLayout>
            <NavBarDashboard />
                <DashboardLayout  token={token}/>
        </MainLayout>
    )
}

export default Dashboard