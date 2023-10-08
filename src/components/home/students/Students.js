import React from 'react';
import StudentList from './StudentList';

const Students = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div class="container mx-auto p-8">
                <div className="container text-center mx-auto p-8">
                    <h1 className="text-4xl font-bold text-center text-indigo-600">Celebrating Excellence, Forging Futures</h1>
                    <div className="mt-4 bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-indigo-600">Meet Our College Topper</h2>
                    </div>
                </div>
                <StudentList />
            </div>

            <div class="container mx-auto p-8">

                <div class="mt-4 bg-white rounded-lg shadow-lg p-6">

                    <p class="mt-4 text-gray-700">
                        At the Institute of Engineering and Technology, Agra, we take immense pride in nurturing and showcasing exceptional talent. Our College Topper is a shining example of the dedication, hard work, and determination that our institution instills in its students.
                    </p>
                    <p class="mt-4 text-gray-700">
                        Each year, one outstanding student emerges as the College Topper, a distinction earned through a rigorous journey of academic excellence and holistic development. This prestigious honor recognizes not only the highest grades but also leadership, innovation, and a commitment to making a positive impact on our campus and in the community.
                    </p>
                    <p class="mt-4 text-gray-700">
                        Our College Topper embodies the spirit of IET Agra—a commitment to excellence in engineering and technology education, a passion for innovation, and a dedication to using their knowledge for the betterment of society. They serve as an inspiration to their peers, demonstrating what is possible when talent, ambition, and opportunity converge.
                    </p>
                    <p class="mt-4 text-gray-700">
                        Join us in celebrating our College Topper, a beacon of achievement and a testament to the quality of education at the Institute of Engineering and Technology, Agra. Their journey represents the potential that resides within each of our students, motivating us to aim higher and reach further in our pursuit of knowledge and success.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Students;
