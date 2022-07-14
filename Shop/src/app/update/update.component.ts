import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdateserviceService } from '../updateservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  user:any;
  constructor(private route:ActivatedRoute,private service:UpdateserviceService) { }

  ngOnInit() : void{
    this.route.paramMap.subscribe(res=> {
      console.log("the data fetched from the url is "+res.get("id"))
      var id = res.get("id");

      this.service.getData(id).subscribe(res=> {
        this.user = res;
      })

    })
  }

}
