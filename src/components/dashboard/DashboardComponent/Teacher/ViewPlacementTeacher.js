import React, { useState, useEffect } from 'react';
import ViewPlacementDetails from './ViewPlacementDetails';

const ViewPlacementTeacher = () => {

    // Get all the courses from the API
    const [placements, setPlacements] = useState([]);
    const [selectedPlacement, setSelectedPlacement] = useState(null);
    const [batch, setBatch] = useState([]);


    const getAllPlacements = () => {
        fetch("https://project-iet-tnp-bk.vercel.app/api/placement/placement-list-all/")
            .then((response) => response.json())
            .then((result) => {
                setPlacements(result);
                console.log(result);
            })
            .catch((error) => {
                console.error('Error fetching placements:', error);
            });
    }

    const getAllBatches = () => {
        const apiUrl = `https://project-iet-tnp-bk.vercel.app/api/batch/batch-list-all/`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((result) => {
                setBatch(result);
            })
            .catch((error) => {
                console.error('Error fetching batch:', error);
            });
    }

    const handleRowClick = (placement) => {
        setSelectedPlacement(placement);
    }

    const handleClosePopup = () => {
        setSelectedPlacement(null);
    }

    useEffect(() => {
        getAllBatches();
    }, []);

    useEffect(() => {
        getAllPlacements();
    }, []);


    const findBatch = (id) => {
        const filteredBatch = batch.filter(e => e.id === id);

        if (filteredBatch[0] === undefined) {
            return null;
        }
        else {
            return filteredBatch[0].fields;
        }
    }

    return (
        <div className="flex flex-wrap items-center justify-center">
            <div className='p-8'>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Placement Teacher View for Editing
                </h3>
                <table className="w-full">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 block whitespace-nowrap">
                                Batch
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Student Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Company Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Branch
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Package (LPA)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {placements && placements.map((placement, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                key={index}
                                onClick={() => handleRowClick(placement)}
                                style={{ cursor: 'pointer' }} // Change cursor to indicate it's clickable
                            >
                                <th scope="row">
                                    {findBatch(placement.fields.student_batch[0]) && findBatch(placement.fields.student_batch[0]).batch}
                                </th>
                                <td scope="row" className="px-6 py-4">
                                    {placement.fields.student_name}
                                </td>
                                <td className="px-6 py-4">
                                    {placement.fields.company_name}
                                </td>
                                <td className="px-6 py-4">
                                    {placement.fields.student_branch}
                                </td>
                                <td className="px-6 py-4">
                                    {placement.fields.student_salary}
                                </td>
                                <td className="px-6 py-4">
                                    {placement.fields.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Display the new component with details as props */}
            {selectedPlacement && (
                <ViewPlacementDetails
                    placement={selectedPlacement}
                    onClose={handleClosePopup}

                />
            )}
        </div>

    );
};

export default ViewPlacementTeacher;
