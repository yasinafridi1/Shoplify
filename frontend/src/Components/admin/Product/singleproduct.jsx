import { React, useState } from 'react';
import EmptyPruduct from './EmptyPruduct';
import Productdetail from './Productdetail';

const Singleproduct = () => {
    const [isProduct, setProduct] = useState(false);
    return (
        <>
            {
                isProduct ? <Productdetail /> : <EmptyPruduct />
            }
        </>
    );
}

export default Singleproduct;
