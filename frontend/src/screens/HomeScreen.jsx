import React from 'react';
import products from '../products';
import Product from '../components/Product';

function HomeScreen() {

    return (
        <div>
            <h1>Latest Products</h1>
            <p className='text-xl text-slate-600 font-semibold'>Welcome to the ProStore</p>

            <div className='container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                {products.map((product) => (
                    <Product key={product._id} currentProduct={product} />
                ))}
            </div>
        </div>
    );
}

export default HomeScreen;
