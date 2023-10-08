import React from 'react';

const MoocCourse = () => {
    return (
        <div class="flex flex-wrap items-center">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div class="  px-4 mr-auto">

                    <h3 class="text-3xl mb-2 font-semibold leading-normal">
                        Mooc Courses completed by students
                    </h3>
                    <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                        Don't let your uses guess by attaching tooltips and popoves to
                    </p>
                    <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                        The kit comes with three pre-built pages to help you get started
                        faster. You can change the text and images and you're good to
                        go. Just make sure you enable them first via JavaScript.
                    </p>

                </div>
                <table >
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 block whitespace-nowrap">
                                Student Name
                            </th>
                            <th scope="col" class="px-6 py-3 ">
                                Company
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Placement/Internship

                            </th>
                            <th>
                                Package
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" >
                                Anurag Verma
                            </th>
                            <td class="px-6 py-4">
                                DataWars
                            </td>
                            <td class="px-6 py-4">
                                Data Science Intern
                            </td>
                            <td class="px-6 py-4">
                                $99999
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" >
                                Aman
                            </th>
                            <td class="px-6 py-4">
                                Google
                            </td>
                            <td class="px-6 py-4">
                                SDE
                            </td>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default MoocCourse;
