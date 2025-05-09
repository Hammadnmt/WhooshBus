type Seat = {
  seatNumber: number;
  gender: string;
};

import { transformSeatsData } from "../utils";

interface UseSeatSelectionProps {
  bookingData: [];
  bookingInfo: Seat[];
  setBookingInfo: React.Dispatch<React.SetStateAction<Seat[]>>;
  setSelectedSeat: React.Dispatch<React.SetStateAction<number | null>>;
  selectSeat: number | null;
}

export function useSeatSelection({
  bookingData,
  bookingInfo,
  setBookingInfo,
  selectSeat,
  setSelectedSeat,
}: UseSeatSelectionProps) {
  const handleSeatClick = (event: any, seatNumber: number) => {
    const isAlreadySelected = bookingInfo.some((seat) => seat.seatNumber === seatNumber);

    if (isAlreadySelected) {
      setBookingInfo((prev) => prev.filter((seat) => seat.seatNumber !== seatNumber));
      setSelectedSeat(null);
    } else {
      setSelectedSeat((prev) => (prev === seatNumber ? null : seatNumber));
    }
  };

  const handleGenderSelect = (gender: string) => {
    setBookingInfo((prev) => {
      const existingSeat = prev.find((seat) => seat.seatNumber === selectSeat);
      if (existingSeat) {
        return prev.map((seat) => (seat.seatNumber === selectSeat ? { ...seat, gender } : seat));
      }
      return selectSeat !== null ? [...prev, { seatNumber: selectSeat, gender }] : prev;
    });
    setSelectedSeat(null);
  };

  const handleUnselectSeat = (seatNumber: number) => {
    setBookingInfo((prev) => prev.filter((seat) => seat.seatNumber !== seatNumber));
  };

  const getSeatInfo = (seatNum: number) => {
    if (!bookingData) return { reserved: false, gender: null };
    const reservations = transformSeatsData(bookingData);

    const existingReservation = reservations.find((reservation) =>
      reservation.seat_numbers.includes(seatNum)
    );

    if (existingReservation) {
      const index = existingReservation.seat_numbers.indexOf(seatNum);
      return {
        reserved: true,
        gender: existingReservation.genders[index],
        seatNumber: null,
      };
    }

    const userSelection = bookingInfo.find((seat) => seat.seatNumber === seatNum);

    return {
      reserved: false,
      gender: userSelection?.gender || null,
    };
  };

  return {
    handleSeatClick,
    handleGenderSelect,
    handleUnselectSeat,
    getSeatInfo,
  };
}
