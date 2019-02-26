import { Component, OnInit } from '@angular/core';
import { ApicallService } from "./../../service/apicall.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
weather;
  constructor(public apicallService:ApicallService,public activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('dt');
    this.weather=this.apicallService.getWeatherById(id);


  }



}
