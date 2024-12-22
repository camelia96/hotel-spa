import { useEffect, useState } from 'react'
import { Hotel } from '../types/interfaces'
import axios from 'axios';
import '../styles/index.css'
import { Link, useParams } from 'react-router';
import { HotelCard } from '../components/HotelCard';


function HotelDetails() {

    const [hotel, setHotel] = useState<Hotel | undefined>(undefined);
    const [error, setError] = useState({
        error: false,
        message: ""
    });
    const [loading, setLoading] = useState<boolean>(false);

    /* Get id from URL */
    const { id } = useParams();

    /*  */
    const validId = (id: string | undefined): boolean => {
        return id !== undefined && !isNaN(Number(id));
    };

    useEffect(() => {

        const fetchHotel = async () => {
            try {

                /* If id doesnt exist or is not a valid number */
                if (!validId(id)) {
                    throw new Error();
                }

                /* Loading spinner before the hotel fully loads */
                setLoading(true);


                /* Fetch hotel */
                const response = await axios.get(`http://localhost:3000/hotels/${id}`);

                /* We can only get a response if the data exists and is an object */
                if (!response || response.data == undefined || typeof response.data != 'object') {
                    throw new Error();
                }

                /* Timeout before setting hotel state to show loading spinner */
                setTimeout(() => {

                    /* Set hotel to show to user */
                    setHotel(response.data);

                    setError({ error: false, message: '' })

                    setLoading(false)
                }, 500);


            } catch (err: any) {

                if (err.response?.status == 500 || err.response?.status == 404) {
                    setError({ error: true, message: "An unexpected event ocurred" })
                } else {
                    setError({ error: true, message: "Hotel not found" })
                }

                setHotel(undefined)

                setLoading(false)
            }

        };

        fetchHotel()
    }, [id])

    return (
        <div className="p-5 flex flex-col items-center">


            <h5 className="text-3xl font-bold text-center mb-5">Hotel</h5>


            {/* Loading display */}
            {loading && (<p className="loading loading-spinner loading-sm mb-5 text-center"></p>)}

            {/* Hotel display */}
            <div className='flex flex-col items-center'>

                {hotel && <HotelCard hotel={hotel} showLink={false} />}
            </div>


            {/* Error display */}
            {error.error && (<div className="w-6/12 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{error.message}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                </span>
            </div>)}
        </div>
    )
}

export default HotelDetails
