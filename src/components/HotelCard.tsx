import { FunctionComponent } from "react";
import { Link } from "react-router";
import { HotelCardProps } from "../types/interfaces";



export const HotelCard: FunctionComponent<HotelCardProps> = ({ hotel, showLink = true }) => {
  return (
    <div className="font-sans bg-white mb-5 w-12/12 rounded-3xl h-72">
      <div className=" border border-gray-200 shadow flex  rounded-3xl">

        {/* Hotel image */}
        <div className=" h-72 w-96 bg-cover bg-center rounded-tl-3xl rounded-bl-3xl"
          style={{ backgroundImage: `url(${hotel.imageUrl})` }}></div>

        <div className="p-5 flex flex-col justify-between">
          <div className='flex items-center'>

            {/* Hotel name */}
            <h5 className="text-2xl font-sans font-bold tracking-tight text-black">{hotel.name}</h5>

            {/* Hotel rating */}
            <p className="bg-primary text-black text-xs font-semibold px-2.5 py-0.5 rounded ms-3">{hotel.rating}</p>

          </div>
          <p className="mb-3 font-normal text-black  flex items-center text-xs">

            {/* Hotel location */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-4">
              <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            {hotel.location}</p>


          {/* Hotel board basis */}
          <p className="mt-3 mb-4 font-normal text-black underline text-sm">{hotel.boardBasis}</p>


          {/* Hotel rooms */}
          <div className="text-gray-500">
            {hotel.rooms.map((room, index) =>
            (<span key={index}>
              {/* Hotel room type and amount */}
              <p className="font-serif text-xs">{room.amount} {room.roomType} room{room.amount > 1 ? 's' : ''}</p>
            </span>))}
          </div>


          {/* Hotel dates of travel */}
          <div className="flex items-center gap-1  mt-3 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
            </svg>

            {hotel.datesOfTravel.map((date, index) => (<p className=" font-normal text-black text-xs">{date}{index != hotel.datesOfTravel.length - 1 ? ' / ' : ''}</p>))}
          </div>


          {/* Hotel redirect */}
          {showLink && <Link to={`/hotels/${hotel.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black hover:bg-primary hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300">
            Show details
          </Link>}
        </div>
      </div>

    </div>);
}