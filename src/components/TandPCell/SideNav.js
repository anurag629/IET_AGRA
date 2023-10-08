import React, { useState } from "react";
import SideNavItem from "./SideNavItem"; // Import the new component
import PlacementServices from "./CellComponent/PlacementServices";
import TrainingServices from "./CellComponent/TrainingServices"; // Import other components
import Placements from "./CellComponent/Placements";

const SideNav = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const sidebarData = [
        {
            title: "Placement Services",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    {/* SVG path */}
                </svg>
            ),
            component: <PlacementServices />,
        },
        {
            title: "Placements",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    {/* SVG path */}
                </svg>
            ),
            component: <Placements />,


        },
        {
            title: "Training Services",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    {/* SVG path */}
                </svg>
            ),
            component: <TrainingServices />,
        },
    ];

    const handleItemClick = (component) => {
        setSelectedComponent(component);
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div class="container mx-auto p-8">
                <div className="flex">
                    <div>
                        {/* Pass all SidebarData to the SideNavItem component */}
                        <SideNavItem
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

export default SideNav;