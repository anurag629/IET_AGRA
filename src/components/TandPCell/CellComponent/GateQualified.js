import React from 'react';
import { useState, useEffect } from 'react';

const Placements = () => {
    const [gateResults, setGateResults] = useState([]);
    const [batchFilter, setBatchFilter] = useState('');
    const [branchFilter, setBranchFilter] = useState('');
    const [filteredGateResults, setFilteredGateResults] = useState([]);
    const [sortBy, setSortBy] = useState(''); // 'package' or ''
    const [sortOrder, setSortOrder] = useState('');


    useEffect(() => {
        fetch("https://project-iet-tnp-bk.vercel.app/api/gate/gate-list-approved/")
            .then(res => res.json())
            .then(
                (result) => {
                    setGateResults(result);
                    setFilteredGateResults(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [])


    const handleFilter = () => {
        const filteredData = gateResults.filter(gateResult => {
            return (
                (batchFilter === '' || gateResult.fields.student_batch === batchFilter) &&
                (branchFilter === '' || gateResult.fields.student_branch === branchFilter)
            );
        });
        setFilteredGateResults(filteredData);
    };

    const batchOptions = [...new Set(gateResults.map(gateResult => gateResult.fields.student_batch))];
    const branchOptions = [...new Set(gateResults.map(gateResult => gateResult.fields.student_branch))];


    const handleSort = (column) => {
        if (column === 'package') {
            if (sortBy === 'package') {
                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
            } else {
                setSortBy('package');
                setSortOrder('asc');
            }
        }
    };

    const sortedPlacements = [...filteredGateResults];


    if (sortBy === 'package') {
        sortedPlacements.sort((a, b) => {
            const aValue = parseFloat(a.fields.student_salary);
            const bValue = parseFloat(b.fields.student_salary);

            if (sortOrder === 'asc') {
                return aValue - bValue;
            } else {
                return bValue - aValue;
            }
        });
    }

    return (
        <div className="flex flex-wrap items-center justify-center">
            <div className='p-8'>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Placement Statistics
                </h3>

                <div className="flex flex-col mb-4">
                    <div className="flex items-center mb-4">
                        <label className="px-6 py-3 block whitespace-nowrap">Batch:</label>
                        <select
                            value={batchFilter}
                            onChange={(e) => setBatchFilter(e.target.value)}
                            className="border p-1"
                        >
                            <option value="">All</option>
                            {batchOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center mb-4">
                        <label className="px-6 py-3 block whitespace-nowrap">Branch:</label>
                        <select
                            value={branchFilter}
                            onChange={(e) => setBranchFilter(e.target.value)}
                            className="border p-1"
                        >
                            <option value="">All</option>
                            {branchOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <button onClick={handleFilter} className="bg-blue-500 text-white px-4 py-2 rounded ml-4">
                            Apply Filters
                        </button>
                    </div>
                </div>



                <table className="w-full">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 block whitespace-nowrap">
                                Batch
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Student Name
                            </th>
                            <th>
                                Profile Picture
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Registration no.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Branch
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rank
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {sortedPlacements.map((gateResult, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                <th scope="row">
                                    {gateResult.fields.student_batch}
                                </th>
                                <td scope="row" className="px-6 py-4">
                                    {gateResult.fields.student_name}
                                </td>
                                <td>
                                    <div className="flex items-center">
                                        {gateResult.fields.profile_picture && <img
                                            src={(gateResult.fields.profile_picture && gateResult.fields.profile_picture[0].url)}
                                            alt="student_image"
                                            className="w-12 h-12 rounded-md mr-4"


                                        />}
                                        {!gateResult.fields.profile_picture &&
                                            <img
                                                src="./images/smile_emoji.jpg"
                                                alt="student_image"
                                                className="w-10 h-10 rounded-md mr-4"
                                            />
                                        }
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {gateResult.fields.registration_no}
                                </td>
                                <td className="px-6 py-4">
                                    {gateResult.fields.student_branch}
                                </td>
                                <td className="px-6 py-4">
                                    {gateResult.fields.rank}
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
