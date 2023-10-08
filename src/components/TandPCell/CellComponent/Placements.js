import React from 'react';

const Placements = () => {
    return (
        <div class="flex flex-wrap items-center">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <table >
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Student Name
                            </th>
                            <th scope="col" class="px-6 py-3">
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

export default Placements;
