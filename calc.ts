
class calcu{
    add(a:number,b:number):number{
        return a+b;
    }

    sub(a:number,b:number):number{
        return a-b;
    }

    mul(a:number,b:number):number{
        return a*b;
    }

    divide(a:number,b:number):number{
        if(b==0)
            console.log("cannot divide with 0")
        return a/b;
    }


    calculate(option:string,a:number,b:number) : void{
        switch (option) {
            case 'add':
                console.log("The sum is : "+this.add(a,b));
                break;
            case 'sub':
                console.log("Difference is : "+this.sub(a,b));
                break;
            case 'mul':
                console.log("Product is : "+this.mul(a,b));
                break;
            case 'div':
                console.log("The result is : "+this.divide(a,b));
                break;
            default:
                break;
        }
    }
}



const calu = new calcu();
     
console.log(calu.calculate('add',5,7));
console.log(calu.calculate('mul',9,5));
