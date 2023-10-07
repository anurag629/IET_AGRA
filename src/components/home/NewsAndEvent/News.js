import React from 'react';

const News = ({ news }) => {
    console.log(news); // add this line to check the value of news
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    {/* <th>Date</th> */}
                    <th>Content</th>
                </tr>
            </thead>
            <tbody>
                {news.map((item, index) => (
                    <tr key={index}>
                        <td>{item.title}</td>
                        {/* <td>{item.date}</td> */}
                        <td>{item.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default News;