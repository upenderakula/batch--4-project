import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class apiservice{
    APIUrl:string='https://jsonplaceholder.typicode.com/posts';
    constructor(private httpclient:HttpClient){

    }
    getAll(){
        return this.httpclient.get(this.APIUrl);
    }
    getByid(id:number){
        let url:string= this.APIUrl +'/' + id;
        return this.httpclient.get(url);
    }
    delete(id:number){
        let url:string=this.APIUrl+'/'+ id;
        return this.httpclient.delete(url);
    }
    update(id:number,resource:any){
        let url:string=this.APIUrl+'/'+id;
        return this.httpclient.put(url,resource);
    }
    creat(resource:any){
        return this.httpclient.post(this.APIUrl,resource); 
    }

}
