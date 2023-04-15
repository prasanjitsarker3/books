import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import OrderShow from '../OrderShow/OrderShow';

const Order = () => {
    const book = useLoaderData();
    const books = book.books;
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedCart = books.find(cart => cart.isbn13 === id);
            if (addedCart) {
                savedCart.push(addedCart);
            }
        }
        setCarts(savedCart);

    }, [books])
    return (
        <div className='my-container'>
            {
                carts.map(cart => <OrderShow cart={cart} key={cart.isbn13}></OrderShow>)
            }
        </div>
    );
};

export default Order;