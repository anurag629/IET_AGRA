import React from 'react';
import StudentCard from './StudentCard';

const StudentList = () => {
    const students = [
        {
            name: 'Prathviraj Singh',
            cgpa: '7.5 CGPA',
            imageUrl: 'https://media.licdn.com/dms/image/D4D03AQHl2Bz4Qz8DaQ/profile-displayphoto-shrink_800_800/0/1671265473603?e=1707955200&v=beta&t=nJosa1BdQHUHnNuxt_5DGjm6yFvRMGoTOJaEosqpI10',

        },
        {
            name: 'Aman Chauhary',
            cgpa: '7.8 CGPA',
            imageUrl: 'https://media.licdn.com/dms/image/D4D03AQHc0LTDPiG01g/profile-displayphoto-shrink_800_800/0/1689089097278?e=1707955200&v=beta&t=NalPgrANOZUyGAK_s_pyjM-GIjbE-WPy6gQC-E5QL2I',

        },
        {
            name: 'Anurag Verma',
            cgpa: '7.5 CGPA',
            imageUrl: 'https://media.licdn.com/dms/image/D4D03AQFtHKg93wbEtA/profile-displayphoto-shrink_800_800/0/1701904508997?e=1707955200&v=beta&t=j-LW0mx6r9yEVzzMl1ILs78LT3iNLJyKvKZWBktzvg4',

        },
        {
            name: 'Abhishek Gupta',
            cgpa: '8.8 CGPA',
            imageUrl: 'https://media.licdn.com/dms/image/D4D03AQGJK2UJyGAb1g/profile-displayphoto-shrink_800_800/0/1698993271429?e=1707955200&v=beta&t=N9ZMlv210pt5vp79FDhVudXF4jBhYHwtNdHKAy3eFVo',

        },
        {
            name: 'Bhavya Airi',
            cgpa: '7.1 CGPA',
            imageUrl: 'https://media.licdn.com/dms/image/D4D03AQHUidcg3h_HzQ/profile-displayphoto-shrink_800_800/0/1696473506408?e=1707955200&v=beta&t=2WAWmjSxoBEn5sFt-MqdadlkiA4yJ7MY1Qio53Z_11U',
        },
        {
            name: 'Gurudayal Gautam',
            cgpa: '8.2 CGPA',
            imageUrl: 'https://media.licdn.com/dms/image/D4D03AQFXBvjZ5NF0_w/profile-displayphoto-shrink_800_800/0/1680796502644?e=1707955200&v=beta&t=G7aoP4hP4Vem-GIkWUSbUr0wlWmbRc9-R3rfqBovkcE',
        },
        {
            name: 'Naveen Kumar',
            cgpa: '6.5 CGPA',
            imageUrl: 'https://media.licdn.com/dms/image/C4E03AQGo2oRIExsjgw/profile-displayphoto-shrink_800_800/0/1663817247858?e=1707955200&v=beta&t=aq8UEI_Aa89Tk1vJVAaqSLnzsMNdsX97xbCJmOmqtPc',
        },
        {
            name: 'Manoj Kumar',
            cgpa: '7.8 CGPA',
            imageUrl: 'https://media.licdn.com/dms/image/D4D03AQHh2a0jdYVEyQ/profile-displayphoto-shrink_800_800/0/1702620139248?e=1707955200&v=beta&t=D-AmSw9zO3IN8yIfKcQW2Q9EICuPf-YK0P2iwAbjQpg',
        }
       
        // Add other students here
    ];

    return (
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {students.map((student, index) => (
                <StudentCard key={index} {...student} />
            ))}
        </div>
    );
};

export default StudentList;
