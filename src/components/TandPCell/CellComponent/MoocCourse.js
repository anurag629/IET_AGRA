import React, { useState, useEffect } from 'react';


const MoocCourse = () => {
    const [courses, setCourses] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://ietagra-backend.onrender.com/api/course/course-list-approved/")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setIsLoaded(true);
                    setCourses(result);
                },
                (error) => {
                    setIsLoaded(true);
                }
            )
    }, [])

    return (
        <div className="flex flex-wrap items-center justify-center">
            <div className='p-8'>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    MOOC Courses completed by our students.
                </h3>
                <table className="w-full">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 block whitespace-nowrap">
                                Student Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Branch
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Course Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Certificate
                            </th>
                            <th>
                                Course Duration
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                <th scope="row">
                                    {course.fields.student_name}
                                </th>
                                <td className="px-6 py-4">
                                    {course.fields.student_branch}
                                </td>
                                <td className="px-6 py-4">
                                    {course.fields.course_name}
                                </td>
                                <td className="px-6 py-4">
                                    {/* Display certificate as link */
                                    <a href={course.fields.course_certificate[0].url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 underline">
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
