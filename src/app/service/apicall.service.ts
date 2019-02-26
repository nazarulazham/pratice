import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(public httpClient:HttpClient) { }

  url ="https://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&appid=9fd7a449d055dba26a982a3220f32aa2";
  weathers;

  getAllWeather(){
    let hello="hello";
    console.log(hello);

    return this.httpClient.get(this.url).pipe(
      tap(data=>{
        this.weathers=data["list"];
      })
    );
  }


  getWeatherById(id){
    return this.weathers.filter(val=>{
        return id==val.dt;
    })[0]
    
  }
}
