
export class RandomUserResponse{

    constructor(private _results: RandomUserInfo[] ) {}

    public get results(): RandomUserInfo[] {
        return this._results;
    }
    public set results(value: RandomUserInfo[]) {
        this._results = value;
    }
}


interface RandomUserInfo {
    name: {
        first: string,
        last : string
    },
    location: {
        country: string
    },
    dob:{
        age:number
    },
    picture : {
        large:string
    }
}


// -- Interface
// the Interface describes either a contract for a class or a type
//  it's a pure TS element


// --Model 
// namely a class -- which is a JS function which is used to  generate objects
