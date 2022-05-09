import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';



@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  customerId:string='';
  customerDetalis: any;
  constructor(private activatedRoute:ActivatedRoute,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      this.customerId=data.id;
    })

    this.customerService.viewCustomer(this.customerId).subscribe((data:any)=>{
      this.customerDetalis=data['results'];
      console.log(this.customerDetalis);
      
    })

  }

  



}
