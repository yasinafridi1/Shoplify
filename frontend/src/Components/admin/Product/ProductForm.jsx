import { useState, React, useEffect } from 'react';
import { addProduct } from '../../../https';
import storage from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const ProductForm = () => {

    const [image, setImage] = useState('');
    const [url, setUrl] = useState(null);

    function handleChange(e) {
        setImage(e.target.files[0]);
    }


    const handleUpload = () => {
        if (!image) {
            alert("Please upload an image first!");
        }
        const storageRef = ref(storage, `/images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
            "state_changed",
            snapshot => { },
            err => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
            }
        );
    };



    const product = {
        name: 'Man shirts',
        price: 350,
        category: 'female',
        type: 'jean',
        description: 'this is best jeans'
    }
    const [values, setValues] = useState({
        productName: '',
        price: '',
        type: '',
        category: '',
        description: '',
    });


    function setData(e) {
        const { name, value } = e.target;
        setValues((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    useEffect(() => {
        if (product) {
            const { name, type, category, price, description, image } = product;
            setValues({
                productName: name,
                type,
                category,
                description,
                price
            })
        }
    }, []);


    function handleSubmit(e) {
        e.preventDefault();
        handleUpload();
    }


    return (
        <>
            <section className='formSection'>
                <div className="wrapper">
                    <div className="triangle">
                        <h1 className='px-6 mt-32 header-text text-2xl text-white'>Welcome!</h1>
                        <div className='px-6 header-text text-base text-white'>
                            <p>Create new product</p>
                            <p>or update a product</p>
                        </div>
                    </div>
                    <form className='bg-white h-full text-center' encType="multipart/form-data">
                        <h1 className='text-3xl header-text mt-4'>Add Product</h1>
                        <p className='mb-3 text-red-500'>{/* ** Fields are required ** */}</p>
                        <div className="inputs pr-10">

                            <input value={values.productName} onChange={setData} name='productName' type="text" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-2 mb-2 text-base outline-none" required placeholder='Product name' />
                            <input value={values.price} onChange={setData} name='price' type="number" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-2 text-base outline-none" required placeholder='Product price' />
                            <input type="file" onChange={(e) => { handleChange(e) }} className="border border-gray-400 bg-white  w-full rounded-lg px-3 py-1 mt-4 text-sm outline-none" required placeholder='Product Image' />

                            <select value={values.type} name='type' onChange={setData} className="block px-3 py-1 mt-3 mb-2 w-full text-lg text-gray-900  rounded-lg border border-gray-400 outline-none">
                                <option value="shirt">Shirt</option>
                                <option value="jean">Jeans</option>
                                <option value="shoes">Shoes</option>
                            </select>

                            <select value={values.category} onChange={setData} name='category' className="block px-3 py-1 mt-3 mb-2 w-full text-lg text-gray-900  rounded-lg border border-gray-400 outline-none">
                                <option value="male">Male</option>
                                <option value="female" > Female</option>
                            </select>
                            <textarea value={values.description} onChange={setData} name='description' cols="10" rows="3" placeholder='Enter product description' className='mt-3 px-3 py-2 text-lg rounded-lg border border-gray-400 outline-none w-full'></textarea>

                        </div>
                        <div className="btn-div mt-3 mb-3">
                            <button type='submit' className='mb-2 border border-pink-600 px-8 py-0.5 text-lg text-pink-600 bg-white font-semibold transition-all ease-in-out duration-700 hover:text-white hover:bg-pink-600' onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default ProductForm;
