import React, { useState, useEffect } from 'react';


const MoocCourse = () => {
    const [courses, setCourses] = useState([]);
    const [batchFilter, setBatchFilter] = useState('');
    const [platformFilter, setPlatformFilter] = useState('');
    const [branchFilter, setBranchFilter] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        fetch("https://project-iet-tnp-bk.vercel.app/api/course/course-list-approved/")
            .then(res => res.json())
            .then(
                (result) => {
                    setCourses(result);
                    setFilteredCourses(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [])


    const handleFilter = () => {
        const filteredData = courses.filter(course => {
            return (
                (batchFilter === '' || course.fields.student_batch === batchFilter) &&
                (platformFilter === '' || course.fields.course_platform === platformFilter) &&
                (branchFilter === '' || course.fields.student_branch === branchFilter)
            );
        });
        setFilteredCourses(filteredData);
    };

    const batchOptions = [...new Set(courses.map(course => course.fields.student_batch))];
    const platformOptions = [...new Set(courses.map(course => course.fields.course_platform))];
    const branchOptions = [...new Set(courses.map(course => course.fields.student_branch))];


    return (
        <div className="flex flex-wrap items-center justify-center">
            <div className='p-8'>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    MOOC Courses completed by our students.
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
                        <label className="px-6 py-3 block whitespace-nowrap">Platform:</label>
                        <select
                            value={platformFilter}
                            onChange={(e) => setPlatformFilter(e.target.value)}
                            className="border p-1"
                        >
                            <option value="">All</option>
                            {platformOptions.map((option, index) => (
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
                            <th scope="col" className="px-6 py-3">
                                Branch
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Platform
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Course Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Certificate
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Course Duration
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCourses.map((course, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                <th scope="row" className="px-6 py-4">
                                    {course.fields.student_batch}
                                </th>
                                <th className="px-6 py-4">
                                    {course.fields.student_name}
                                </th>
                                <td className="px-6 py-4">
                                    {course.fields.student_branch}
                                </td>
                                <td className="px-6 py-4">
                                    {course.fields.course_platform}
                                </td>
                                <td className="px-6 py-4">
                                    {course.fields.course_name}
                                </td>
                                <td className="px-6 py-4">
                                    {/* Display certificate as link */
                                    <a href={course.fields.course_certificate} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 underline">
                                        View certificate
                                    </a>
                                    }
                                </td>
                                <td className="px-6 py-4">
                                    {course.fields.course_duration}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default MoocCourse;
