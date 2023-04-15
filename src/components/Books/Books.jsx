import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BookCart from '../BookCart/BookCart';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const Books = () => {
    const navigation = useNavigation()
    console.log(navigation.state)
    if (navigation.state === 'loading') {
        return <LoaderSpinner></LoaderSpinner>
    }
    const { books } = useLoaderData();
    console.log(books);
    return (
        <div className='my-container'>
            <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
                {
                    books.map(book => <BookCart key={book.isbn13} book={book}></BookCart>)
                }
            </div>
        </div>
    );
};

export default Books;