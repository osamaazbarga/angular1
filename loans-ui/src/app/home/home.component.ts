import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from '../core/http/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isOffline:boolean | undefined;
  @HostListener('window:offline',['$event'])
  isWindowOffline(event: any){
    console.log('offline ? ',event);
    
  }
  
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }
  doGet(){
    this.apiService.doGet().subscribe((event:HttpEvent<any>)=>{
      // console.log('event is',event);
      switch (event.type) {
        case HttpEventType.DownloadProgress:
          console.log(`${Math.round(event.loaded/1024)}KB loaded`);
          
          break;
      
        
      }
      
    })
    // this.apiService.doGet().subscribe((res)=>{
    //   console.log('res',res);  
    // });

    // this.apiService
    // .doGet()
    // .toPromise()
    // .then((res)=>{
    //   console.log('res',res);
    // })
  }

  doDelete(){
    this.apiService.doDelete().subscribe((res)=>{
      console.log('res',res);
      
    });
  }

  doPost(){
    this.apiService.doPost().subscribe((res)=>{
      console.log('res',res);
      
    });
  }


  doPut(){
    this.apiService.doPut().subscribe((res)=>{
      console.log('res',res);
      
    });
  }

}
