import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../products';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

function ProductScreen() {
    const { id: productId } = useParams();
    const product = products.find((p) => p._id === productId);

    return (
        <>
            <Link to='/' className=''>
                <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l mt-3'>Go Back</button>

            </Link>


            <div className='flex'>
                <div className='w-1/3'>one</div>
                <div className=' w-2/3'>two</div>
                <div className=''>three</div>
            </div>



        </>
    )
}

export default ProductScreen