import { Component, OnInit } from '@angular/core';
import { ApicallService } from "./../service/apicall.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  weathers;
  constructor(public apicallService:ApicallService, public router:Router){}

  ngOnInit()
  {
    this.apicallService.getAllWeather().subscribe(data=>{
      this.weathers=data["list"];
    })
  }

  openInfo(dt)
  {
    this.router.navigate(['info/'+dt]);
  }

}
