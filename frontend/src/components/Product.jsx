import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,


} from "@material-tailwind/react";

import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ currentProduct }) => {

    return (
        <Card className="mt-6 sm:w-96 md:w-80 lg:w-72 xl:w-72 border">
            <Link to={`/product/${currentProduct._id}`}>
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src={currentProduct.image}
                        alt="card-image"
                    />
                </CardHeader>
            </Link>

            <CardBody>
                <Link to={`/product/${currentProduct._id}`}>
                    <Typography variant="h5" color="blue-gray" className="mb-2 mt-12" tag="p">

                        {currentProduct.name}

                    </Typography>
                </Link>
                <Typography tag="p">
                    <Rating value={currentProduct.rating} text={`${currentProduct.numReviews} reviews`} />

                </Typography>

                <Typography tag="p">
                    {currentProduct.price}

                </Typography>
            </CardBody>


        </Card >
    );
};

export default Product;
