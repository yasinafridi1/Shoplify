import { useState, React, useEffect } from 'react';
import { addProduct } from '../../../https';
import storage from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Loading from '../../Common/Loading';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [image, setImage] = useState('');
    const [error, setError] = useState('');
    const [values, setValues] = useState({
        productName: '',
        price: '',
        type: '',
        category: '',
        description: '',
        image: ''
    });


    function handleChange(e) {
        setImage(e.target.files[0]);
    }


    const handleUpload = () => {
        if (!image) {
            setError('Please select an image');
        }
        setLoading(true);
        const storageRef = ref(storage, `/images/${Date.now()}-${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
            "state_changed",
            snapshot => { },
            err => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    values.image = url;
                    addProduct(values).then(data => {
                        setLoading(false);
                        navigate('/');
                    }).catch((err) => {
                        setLoading(false);
                        if (err.message === 'Network Error') {
                            setError('Slow internet connection');

                        } else {
                            setError('Something went wrong');
                        }
                    })
                });
            }
        );
    };



    const product = {
        name: 'Man shirts',
        price: 350,
        category: 'female',
        type: 'jean',
        description: 'this is best jeans',
        image: "https://firebasestorage.googleapis.com/v0/b/images-f7401.appspot.com/o/images%2F1668870568621-ganttchart.jpg?alt=media&token=d83697d3-286f-40d9-9b86-1d7cb34d5acf"
    }



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
            setImage(image);
            setValues({
                productName: name,
                type,
                category,
                description,
                price: price.toString(),
                image
            })
        }
    }, []);


    function handleSubmit(e) {
        e.preventDefault();
        handleUpload();
    }

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <section className='formSection'>
                <div className="wrapper mb-10">
                    <div className="triangle">
                        <h1 className='px-6 mt-32 header-text text-2xl text-white'>Welcome!</h1>
                        <div className='px-6 header-text text-base text-white'>
                            <p>Create new product</p>
                            <p>or update a product</p>
                        </div>
                    </div>
                    <form className='bg-white h-full text-center' encType="multipart/form-data">
                        <h1 className='text-3xl header-text mt-4'>Add Product</h1>
                        <p className='mb-3 text-red-500 font-semibold'>{error}</p>
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
