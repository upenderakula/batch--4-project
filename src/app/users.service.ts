import { HttpClient } from "@angular/common/http";
import { commonservice } from "./common.service";


export class userservice extends commonservice{
    constructor(public override httpclient:HttpClient){
        super('https://jsonplaceholder.typicode.com/users',httpclient)

    }

}




