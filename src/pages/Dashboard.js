import React, { useState, useEffect } from "react";
import MainLayout from '../layouts/MainLayout';
import NavBarDashboard from '../components/NavBarDashboard';
import DashboardLayout from '../layouts/dashboard/DashboardLayout';
import { getUserInfo } from '../services/server/server'


function Dashboard() {
    const [initialUserInfo, setInitialUserInfo] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const result = await getUserInfo()
            console.log(result)
            if (result.data) {
                setInitialUserInfo(result.data)
            }
        }
        fetchData()
    }, [])

    return (
        <MainLayout>
            <NavBarDashboard />
            {initialUserInfo
                ?
                <DashboardLayout initialUserInfo={initialUserInfo} />
                :
                <></> //TODO loading card
            }

        </MainLayout>
    )
}

export default Dashboard