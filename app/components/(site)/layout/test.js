import React, { useEffect, useState } from 'react';
import HomeLayout from '../../../layouts/home';
import Banner3 from '../../../components/common/banner3';
import { Rate } from 'antd';
import { FiHeart, FiMessageCircle, FiShare2 } from 'react-icons/fi';
import Tabs2 from '../../../components/common/tabs2';
import Author from '../../../components/product/author';
import ProductDetail from '../../../components/product/detail';
import TabReview from '../../../components/tabDetails/review';
import { useSite } from '../../../contexts/site';
import { useFetch } from '../../../helpers/hooks';
import { fetchBooks } from '../../../helpers/backend_helper';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useCart } from '../../../contexts/cart';
import Head from 'next/head';

const tabData = [
    {
        _id: 1,
        title: 'Product Details',
    },
    {
        _id: 2,
        title: 'Author',
    },
    {
        _id: 3,
        title: 'Review',
    },
];

const BookDetails = () => {
    const site = useSite();
    const [activeTab, setActiveTab] = useState(tabData[0].title);
    const { query } = useRouter();
    const [book, getBook, { loading, error }] = useFetch(fetchBooks, {}, false);
    const [bookImage, setBookImage] = useState('');
    const [quantity, setQuantity] = useState(1);

    const { increaseItemQuantity } = useCart();

    useEffect(() => {
        if (!!query) {
            getBook({ _id: query?._id });
        }
    }, [query?._id]);

    useEffect(() => {
        if (!!book?.images) {
            setBookImage(book?.images[0]);
        }
    }, [book]);

    const updateQuantity = (newValue) => {
        if (newValue <= 1) {
            setQuantity(1);
        } else {
            setQuantity(newValue);
        }
    };

    return (
        <div>
            <Head>
            <title>Product | Details</title>

            </Head>
            <Banner3 second_title='Product' third_title='Details' />

            <div className='container mx-auto py-9 md:py-12 lg:py-24'>
                <div className='flex flex-col items-center justify-center gap-16 lg:flex-row'>
                    <div className='flex w-full flex-col-reverse gap-4 md:flex-row lg:w-1/2 lg:gap-8'>
                        <div className='grid h-[475px] grid-cols-3 md:grid-cols-1 lg:gap-6'>
                            {book?.images?.map((img, i) => (
                                <div
                                    key={i}
                                    className='flex h-24 w-24 items-center justify-center rounded-xl md:h-36 md:w-36'
                                    onClick={() => setBookImage(img)}
                                >
                                    <Image
                                        src={img}
                                        alt='book image'
                                        width={140}
                                        height={140}
                                        className='h-full rounded-lg'
                                    />
                                </div>
                            ))}
                        </div>

                        <div className='flex w-full items-center justify-center rounded-xl bg-secondary_text md:w-9/12 lg:h-[480px] lg:w-[400px]'>
                            <Image
                                src={bookImage}
                                alt='book thumbnail'
                                className='h-[335px] w-[482px]'
                                height={335}
                                width={482}
                            />
                        </div>
                    </div>

                    <div className='w-full sm:w-96 md:w-8/12 lg:w-6/12'>
                        <h2 className='header_3 text-primary_text'>{book?.name}</h2>
                        <p className='paragraph_3 mt-6 text-secondary_text'>
                            By: <span className='text-primary'>{book?.created_by?.name}</span>{' '}
                        </p>
                        <p className='paragraph mt-4 text-secondary_text'>
                            In: <span className='underline'>{book?.category?.name}</span>{' '}
                        </p>
                        <div className='mt-4 flex max-w-[430px] gap-x-5'>
                            <div className='flex'>
                                <Rate
                                    disabled
                                    value={book?.average_rating}
                                    className='text-[15px] text-secondary'
                                />
                                <p className='header_6 ml-1 text-secondary_text'>
                                    ({book?.total_rating})
                                </p>
                            </div>
                            <div className='flex justify-center'>
                                <FiMessageCircle className='text-[18px] text-secondary' size={20} />
                                <p className='paragraph_3 ml-1 text-secondary_text'>
                                    {book?.language}
                                </p>
                            </div>
                            {/* <div className='flex'>
                                <p className='paragraph_3 text-secondary_text'>In Stock</p>
                                <p className='bg-tertiary_text text-primary_text ml-2 h-6 w-12 text-center rounded-lg'>
                                    {book?.stock_qty}
                                </p>
                            </div> */}
                        </div>

                        <div className='mt-6 flex'>
                            <p className='header_4 text-primary' style={{ font: 'bold' }}>
                                {site?.currency_code}
                                {book?.current_price}
                            </p>
                            <del className='header_5 mt-1 ml-2 text-secondary_text'>
                                {site?.currency_code}
                                {book?.price}
                            </del>
                        </div>

                        {/* <div className='mt-2'>
                            <p className='paragraph text-secondary_text'>
                                + {site?.currency_code}
                                {book?.shipping_charge} Shipping
                            </p>
                        </div> */}

                        <div className='mt-4'>
                            {/* quantity field */}
                            <div className='flex h-12 w-[190px] items-center justify-between rounded-xl bg-tertiary_text'>
                                <button
                                    onClick={() => updateQuantity(quantity - 1)}
                                    className='h-full w-10 text-base font-medium leading-4 text-primary_text focus:outline-none focus:ring-2'
                                >
                                    -
                                </button>
                                <input
                                    type='text'
                                    className='h-full w-10 bg-tertiary_text text-center focus:outline-none'
                                    value={quantity}
                                />
                                <button
                                    onClick={() => updateQuantity(quantity + 1)}
                                    className='h-full w-12 leading-4 text-primary_text focus:outline-none focus:ring-2'
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className='mt-4 flex space-x-7'>
                            {/* <button className='transition-all ease-in-out mt-4 hover:bg-primary group hover:text-white bg-white rounded-xl lg:w-[171px] w-full h-12 flex justify-center items-center border-primary border-2 border-opacity-70 paragraph'>
                                Buy Now
                            </button> */}
                            <button
                                onClick={() => {
                                    increaseItemQuantity({
                                        product: {
                                            _id: book?._id,
                                            name: book?.name,
                                            price: book?.current_price,
                                            images: book?.images[0],
                                            created_by: book?.created_by,
                                            discount_value: book?.discount_value,
                                        },
                                        quantity,
                                    });
                                    setQuantity(0);
                                }}
                                disabled={quantity <= 0}
                                className=' paragraph group mt-4 flex h-12 w-full items-center justify-center rounded-xl border-2 border-primary border-opacity-70 bg-white transition-all ease-in-out hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:border-gray-500 disabled:bg-gray-500 disabled:text-gray-700 lg:w-[171px]'
                            >
                                Add To Cart
                            </button>
                        </div>

                        {/* <div className='flex space-x-4 mt-6'>
                            <button className='flex items-center justify-center text-secondary_text w-10 h-10 border border-secondary_text hover:bg-primary group hover:text-white bg-white rounded-full'>
                                <FiHeart size={20} />
                            </button>
                            <button className='flex items-center justify-center text-secondary_text w-10 h-10 border border-secondary_text hover:bg-primary group hover:text-white bg-white rounded-full'>
                                <FiShare2 size={20} />
                            </button>
                        </div> */}
                    </div>
                </div>

                <Tabs2 tabData={tabData} activeTab={activeTab} setActiveTab={setActiveTab} />
                {activeTab === tabData[0].title && (
                    <ProductDetail description={book?.description} />
                )}

                {activeTab === tabData[1].title && <Author author={book?.created_by} />}

                {activeTab === tabData[2].title && <TabReview review={book?.rating} book={book} />}
            </div>
        </div>
    );
};

BookDetails.getLayout = function getLayout(page) {
    return <HomeLayout>{page}</HomeLayout>;
};
export default BookDetails;
