import React from 'react';

const OrderShow = ({ cart }) => {
    console.log(cart);
    return (
        <div className='w-[75%] mx-auto'>
            <div className=' flex md:flex-row flex-col  items-center gap-5 border w-full m-2'>
                <img src={cart.image} alt="" srcset="" className='h-[200px] w-[180px]' />
                <div className='flex items-center  justify-between'>
                    <div>
                        <p className='pb-12'>{cart.subtitle}</p>
                        <p>{cart.title}</p>
                    </div>
                    <div className=''>
                         <p>Removed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderShow;