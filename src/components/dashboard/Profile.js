import React from 'react';

const Profile = ({ name, email }) => {
    return (
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
            <h2 className="text-3xl font-bold mb-4">Name: {name}</h2>
            <h2 className="text-lg font-medium mb-2">Email: {email}</h2>
           
            
        </div>
    );
};

export default Profile;