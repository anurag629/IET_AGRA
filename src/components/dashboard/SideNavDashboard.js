import React, { useState, useEffect } from "react";
import SideNavItemDashboard from "./SideNavItemDashboard"; // Import the new component
import Profile from "./DashboardComponent/Profile";
import AddCourse from "./DashboardComponent/Student/AddCourse";
import AddPlacement from "./DashboardComponent/Student/AddPlacement";
import AddGateResult from "./DashboardComponent/Student/AddGateResult";
import ViewCourseTeacher from "./DashboardComponent/Teacher/ViewCourseTeacher";
import ViewPlacementTeacher from "./DashboardComponent/Teacher/ViewPlacementTeacher";

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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            ),
            component: <Profile />,
        },
        // Conditionally add elements based on user type
        ...(userTypes[userData.user_type] === "Student"
            ? [
                {
                    title: "Add Course",
                    icon: (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                            />
                        </svg>
                    ),
                    component: <AddCourse />,
                },
            ]
            : []),
            ...(userTypes[userData.user_type] === "Student"
            ? [
                {
                    title: "Add Placement",
                    icon: (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                            />
                        </svg>
                    ),
                    component: <AddPlacement />,
                },
            ]
            : []),
            ...(userTypes[userData.user_type] === "Student"
            ? [
                {
                    title: "Add Gate Result",
                    icon: (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                            />
                        </svg>
                    ),
                    component: <AddGateResult />,
                },
            ]
            : []),
        ...(userTypes[userData.user_type] === "Teacher"
            ? [
                {
                    title: "View Course",
                    icon: (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                            />
                        </svg>
                    ),
                    component: <ViewCourseTeacher />,
                },
            ]
            : []),
        ...(userTypes[userData.user_type] === "Teacher"

            ? [
                {
                    title: "View Placement",
                    icon: (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                            />
                        </svg>
                    ),
                    component: <ViewPlacementTeacher />,
                },
            ]
            : []),
            
    ];


    const handleItemClick = (component) => {
        setSelectedComponent(component);
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div class="container mx-auto p-8">
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