var Theatre = /** @class */ (function () {
    function Theatre(theatreName, totalSeats) {
        this.theatreName = theatreName;
        this.seats = Array(totalSeats).fill(true);
    }
    Theatre.prototype.bookSeat = function (seatNumber) {
        if (seatNumber < 1 || seatNumber > this.seats.length) {
            console.log("Invalid seat number.");
            return false;
        }
        if (this.seats[seatNumber - 1]) {
            this.seats[seatNumber - 1] = false;
            console.log("Seat ".concat(seatNumber, " booked successfully."));
            return true;
        }
        else {
            console.log("Seat ".concat(seatNumber, " is already booked."));
            return false;
        }
    };
    Theatre.prototype.cancelSeat = function (seatNumber) {
        if (seatNumber < 1 || seatNumber > this.seats.length) {
            console.log("Invalid seat number.");
            return false;
        }
        if (!this.seats[seatNumber - 1]) {
            this.seats[seatNumber - 1] = true;
            console.log("Booking for seat ".concat(seatNumber, " canceled successfully."));
            return true;
        }
        else {
            console.log("Seat ".concat(seatNumber, " is not booked."));
            return false;
        }
    };
    Theatre.prototype.availableSeats = function () {
        return this.seats
            .map(function (isAvailable, index) { return (isAvailable ? index + 1 : null); })
            .filter(function (seat) { return seat !== null; });
    };
    return Theatre;
}());
var myTheatre = new Theatre("Grand Cinema", 10);
console.log(myTheatre.availableSeats());
myTheatre.bookSeat(3);
myTheatre.bookSeat(3);
console.log(myTheatre.availableSeats());
myTheatre.cancelSeat(3);
myTheatre.cancelSeat(3);
console.log(myTheatre.availableSeats());
