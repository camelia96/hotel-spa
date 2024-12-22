import { useEffect, useState } from 'react'
import { Hotel } from '../types/interfaces'
import axios from 'axios';
import '../styles/index.css'
import { HotelCard } from '../components/HotelCard';

function Hotels() {

  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [error, setError] = useState({ error: false, message: '' });
  const [loading, setLoading] = useState<boolean>(false);



  useEffect(() => {
    
    const fetchHotels = async () => {
      setLoading(true)

      /* Timeout to show the loading spinner */
      setTimeout(() => {

        /* Fetch the data */
        axios.get("http://localhost:3000/hotels")
          .then(response => {

            /* Response only valid if it's array */
            if (!Array.isArray(response.data)) {
              throw new Error()
            }

            /* Set the hotels list to render */
            setHotels(response.data);
            setError({ error: false, message: "" })



          })


          .catch((err: any) => {
            /* Error handling */

            if (err.response?.status == 500 || err.response?.status == 404) {
              setError({ error: true, message: "An unexpected event ocurred" })
            } else {
              setError({ error: true, message: "There was an error trying to get the hotels. Please try again later" })
            }

            /* If theres any error, we do not want to show any list */
            setHotels([])

          })

          setLoading(false)
      }, 1000)
      
    }


    fetchHotels();
  }, [])
  return (
    <div className='flex flex-col items-center'>
      <h1 className="font-bold font-sans  text-5xl text-center uppercase p-5 text-black">Hotels</h1>
      
      {/* Loading display */}
      {loading && (<p className="loading loading-spinner loading-sm mb-5"></p>)}

      {/* Error display */}
      {error.error && (<div className="w-6/12 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <span className="block sm:inline">{error.message}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
        </span>
      </div>)}


      {/* Hotels list display */}
      <div className="flex flex-col items-center">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  )
}

export default Hotels
