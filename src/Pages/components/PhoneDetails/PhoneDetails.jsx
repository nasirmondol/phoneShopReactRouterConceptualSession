import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const PhoneDetails = () => {
    const [phone, setPhone] = useState([]);
    const { phoneId } = useParams();
    console.log(phoneId);
    const phones = useLoaderData();
    console.log(phones);

    useEffect(() => {
        const phoneDetails = phones?.find(phone => phone.id === phoneId)
        // console.log(phoneDetails);
        setPhone(phoneDetails)
    }, [phoneId, phones])

    const handleAddToFavorite = () => {
        console.log(phone);
        const addFavoriteArrayToLocal = [];


        const getLocalItem = JSON.parse(localStorage.getItem('favorite'))
        console.log(getLocalItem);
        if (!getLocalItem) {
            addFavoriteArrayToLocal.push(phone)
            localStorage.setItem('favorite', JSON.stringify(addFavoriteArrayToLocal))
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
        }
        else {
            const exists = getLocalItem.find(item => item.id === phoneId)
            if (!exists) {
                addFavoriteArrayToLocal.push(...getLocalItem, phone);
                localStorage.setItem('favorite', JSON.stringify(addFavoriteArrayToLocal))
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                )
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Product already added!'
                })
            }

        }
    }

    return (
        <div className="flex items-center justify-center h-[80vh]">
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={phone?.image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                        {phone.brand_name}
                    </h6>
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                        {phone.phone_name}
                    </h6>
                    <a className="inline-block" href="#">
                        <button
                            onClick={handleAddToFavorite}
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Add to favorite
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;