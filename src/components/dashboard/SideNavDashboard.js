import React, { useState, useEffect } from "react";
import SideNavItemDashboard from "./SideNavItemDashboard"; // Import the new component
import Profile from "./DashboardComponent/Profile";

import { useDispatch } from 'react-redux';
import { getToken } from '../../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../../services/userAuthApi';
import { setUserInfo } from '../../features/userSlice';

const SideNavDashboard = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);


    // User Info Start
    const dispatch = useDispatch()
    const { access_token } = getToken()
    const { data, isSuccess } = useGetLoggedUserQuery(access_token)

    const [userData, setUserData] = useState({
        user_type: "",
    })

    // Store User Data in Local State
    useEffect(() => {
        if (data && isSuccess) {
            setUserData({
                user_type: data.user_type,
            })
        }
    }, [data, isSuccess])

    // Store User Data in Redux Store
    useEffect(() => {
        if (data && isSuccess) {
            dispatch(setUserInfo({
                user_type: data.user_type,
            }))
        }
    }, [data, isSuccess, dispatch])


    console.log(userData)
    const userTypes = {
        1: "Admin",
        2: "Student",
        3: "Teacher",
        4: "Staff"
    }

    console.log(userTypes[userData.user_type])
    // User Info End


    const sidebarData = [
        {
            title: "Profile",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            component: <Profile />,
        },
        // Pass the props as per user type using if else condition

        
    ];

const handleItemClick = (component) => {
    setSelectedComponent(component);
};

return (
    <section className="bg-white dark:bg-gray-900">
        <div class="container mx-auto p-8 h-screen">
            <div className="flex">
                <div>
                    {/* Pass all SidebarData to the SideNavItemDashboard component */}
                    <SideNavItemDashboard
                        sidebarData={sidebarData}
                        onItemClick={handleItemClick}
                    />
                </div>
                <div>
                    {/* Display the selected component */}
                    {selectedComponent}
                </div>
            </div>
        </div>
    </section>
);
};

export default SideNavDashboard;