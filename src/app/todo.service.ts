import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { commonservice } from "./common.service";

@Injectable({
    providedIn:'root'
})

export class todoservice extends commonservice{
    constructor(public override httpclient:HttpClient){
        super('https://jsonplaceholder.typicode.com/todos',httpclient)

    }
}