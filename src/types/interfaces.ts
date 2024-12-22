export interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
  datesOfTravel: string[];
  boardBasis: string;
  rooms: Room[];
}

export interface Room {
  roomType: string;
  amount: number;
}


export interface HotelCardProps {
  hotel: Hotel;
  showLink?: boolean
}
