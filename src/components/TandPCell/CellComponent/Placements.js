import React from 'react';
import { useState, useEffect } from 'react';

const Placements = () => {
    const [placements, setPlacements] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [batch, setBatch] = useState([]);

    useEffect(() => {
        fetch("https://ietagra-backend.onrender.com/api/placement/placement-list-approved/")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setIsLoaded(true);
                    setPlacements(result);
                },
                (error) => {
                    setIsLoaded(true);
                }
            )
    }, [])
    
    const getAllBatches = () => {
        const apiUrl = `https://ietagra-backend.onrender.com/api/batch/batch-list-all/`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((result) => {
                setBatch(result);
            })
            .catch((error) => {
                console.error('Error fetching batch:', error);
            });
    }

  

    useEffect(() => {
        getAllBatches();
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
                    Placement Statistics
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
                                Position
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Package (LPA)
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {placements.map((placement, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
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
                                    {placement.fields.position_offered}
                                </td>
                                <td className="px-6 py-4">
                                    {placement.fields.student_salary}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Placements;
