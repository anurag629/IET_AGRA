import React, { useState, useEffect } from 'react';

const ViewCourseTeacher = () => {

    // Get all the courses from the API
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("https://project-iet-tnp-bk.vercel.app/api/course/course-list-all/")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    // setIsLoaded(true);
                    setCourses(result);
                },
                (error) => {
                    // setIsLoaded(true);
                }
            )
    }, [])





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
                                Package (LPA)
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                <th scope="row">
                                    {course.student_batch}
                                </th>
                                <td scope="row" className="px-6 py-4">
                                    {course.student_name}
                                </td>
                                <td className="px-6 py-4">
                                    {course.company_name}
                                </td>
                                <td className="px-6 py-4">
                                    {course.student_branch}
                                </td>
                                <td className="px-6 py-4">
                                    {course.company_salary}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ViewCourseTeacher;
