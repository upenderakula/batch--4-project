import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class commonservice{
    
    constructor(@Inject(String) private APIUrl:string , public httpclient:HttpClient){

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
