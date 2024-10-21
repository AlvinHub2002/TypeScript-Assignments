enum roomCategory{
    single="single",
    suit="suit",
    double="double"
}



class room{
    roomId : number;
    capacity : number;
    costPerNight : number;
    category: roomCategory;
    availabale : boolean;

    constructor(roomId : number, capacity:number,category: roomCategory){
        this.postCostPerNigth(category);
        this.roomId = roomId;
        this.capacity=capacity;
        this.category=category;
        this.availabale=true;
    }

    postCostPerNigth(category: roomCategory){
        if(roomCategory.single==category){
            this.costPerNight=1000;
        }   
        else if(roomCategory.double==category){
            this.costPerNight=3000;
        }
        else{
            this.costPerNight=5000;
        }
    }
}

class hotel{
    rooms : room[];
    constructor(){
        this.rooms=[];
    }

    addRoom(room : room): void{
        this.rooms.push(room);
    }

    checkIn(roomId: number): void{
        const room = this.rooms.find((room)=>room.roomId==roomId);
        if(room && room.availabale){
            room.availabale=false;
            console.log(`Room ${roomId} is checked in`);
        }
        else{
            console.log(`Room ${roomId} is not available`);
        }
    }

    checkOut(roomId : number):void{
        const room = this.rooms.find((room)=>room.roomId==roomId);
        if(room?.availabale==false){
            room.availabale=true;
            console.log(`checked out of room : ${roomId}`);
        }
        else if(!room){
            console.log("there is no room in this id");
        }
        else{
            console.log("room is already vacant")
        }

    }
}