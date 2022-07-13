import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.css']
})
export class PdpComponent implements OnInit {

  product:any;

  constructor(private route:ActivatedRoute, private service:ProductService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(res=> {
      alert("the data fetched from the url is "+res.get("id"))

      var id = res.get("id");

      this.service.getProductById(id).subscribe(res=> {
        this.product = res;
      })

    })
  }

}
