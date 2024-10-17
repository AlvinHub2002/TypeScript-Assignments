class Theatre {
    theatreName: string;
    seats: boolean[];

    constructor(theatreName: string, totalSeats: number) {
        this.theatreName = theatreName;
        this.seats = Array(totalSeats).fill(true);
    }

    bookSeat(seatNumber: number): boolean {
        if (seatNumber < 1 || seatNumber > this.seats.length) {
            console.log("Invalid seat number.");
            return false;
        }
        if (this.seats[seatNumber - 1]) {
            this.seats[seatNumber - 1] = false; 
            console.log(`Seat ${seatNumber} booked successfully.`);
            return true;
        } else {
            console.log(`Seat ${seatNumber} is already booked.`);
            return false;
        }
    }

    cancelSeat(seatNumber: number): boolean {
        if (seatNumber < 1 || seatNumber > this.seats.length) {
            console.log("Invalid seat number.");
            return false;
        }
        if (!this.seats[seatNumber - 1]) {
            this.seats[seatNumber - 1] = true; 
            console.log(`Booking for seat ${seatNumber} canceled successfully.`);
            return true;
        } else {
            console.log(`Seat ${seatNumber} is not booked.`);
            return false;
        }
    }

    availableSeats(): number[] {
        return this.seats
            .map((isAvailable, index) => (isAvailable ? index + 1 : null))
            .filter(seat => seat !== null) as number[];
    }
}


const myTheatre = new Theatre("Grand Cinema", 10);
console.log(myTheatre.availableSeats()); 

myTheatre.bookSeat(3); 
myTheatre.bookSeat(3);

console.log(myTheatre.availableSeats()); 

myTheatre.cancelSeat(3); 
myTheatre.cancelSeat(3); 

console.log(myTheatre.availableSeats()); 
