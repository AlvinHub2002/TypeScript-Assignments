var roomCategory;
(function (roomCategory) {
    roomCategory["single"] = "single";
    roomCategory["suit"] = "suit";
    roomCategory["double"] = "double";
})(roomCategory || (roomCategory = {}));
var room = /** @class */ (function () {
    function room(roomId, capacity, category) {
        this.postCostPerNigth(category);
        this.roomId = roomId;
        this.capacity = capacity;
        this.category = category;
        this.availabale = true;
    }
    room.prototype.postCostPerNigth = function (category) {
        if (roomCategory.single == category) {
            this.costPerNight = 1000;
        }
        else if (roomCategory.double == category) {
            this.costPerNight = 3000;
        }
        else {
            this.costPerNight = 5000;
        }
    };
    return room;
}());
var hotel = /** @class */ (function () {
    function hotel() {
        this.rooms = [];
    }
    hotel.prototype.addRoom = function (room) {
        this.rooms.push(room);
    };
    hotel.prototype.checkIn = function (roomId) {
        var room = this.rooms.find(function (room) { return room.roomId == roomId; });
        if (room && room.availabale) {
            room.availabale = false;
            console.log("Room ".concat(roomId, " is checked in"));
        }
        else {
            console.log("Room ".concat(roomId, " is not available"));
        }
    };
    hotel.prototype.checkOut = function (roomId) {
        var room = this.rooms.find(function (room) { return room.roomId == roomId; });
        if ((room === null || room === void 0 ? void 0 : room.availabale) == false) {
            room.availabale = true;
            console.log("checked out of room : ".concat(roomId));
        }
        else if (!room) {
            console.log("there is no room in this id");
        }
        else {
            console.log("room is already vacant");
        }
    };
    return hotel;
}());
