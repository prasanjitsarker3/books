import React from 'react';
import { Link } from 'react-router-dom';

const BookCart = ({ book }) => {
    const { image, isbn13, price, title, url, subtitle } = book;
    return (
        <Link to={`../book/${isbn13}`}>
            <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl  '>
                <img src={image} alt="" srcset="" className='object-cover w-full h-56 md:h-64 lg:h-80' />
                <div className='bg bg-black bg-opacity-75 px-6 py-4 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 flex flex-col transition-opacity text-center'>

                    <p>{title}</p>
                    <br />
                    <p>{subtitle.substring(0, 45)}...</p>
                    <br />
                    <p className='mt-auto'>{price}</p>

                </div>
            </div>
        </Link>
    );
};

export default BookCart;