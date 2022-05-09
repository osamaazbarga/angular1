import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {environment as env} from '../../../environments/environment';
import { HandleErrorService } from './handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers:HttpHeaders | undefined;
  constructor(private http:HttpClient,private handleError:HandleErrorService) { 
    const headers={guest:'true',lanuage:'en'}
    this.headers=new HttpHeaders(headers)
  }

  doGet(){
    console.log(env.apiRoot);
    const req=new HttpRequest('GET',`http://jsonplaceholder.typicode.com/photos`,{reportProgress:true})
    return this.http.request(req)
  }

  doDelete(){
    console.log(env.apiRoot);
    return this.http.delete(`${env.apiRoot}/delete`,{
      params:{page:'10'},
      headers:this.headers,
    })
  }

  doPost(){
    console.log(env.apiRoot);
    return this.http.post(`${env.apiRoot}/post`,{age:20},{
      params:{page:'10'},
      headers:this.headers,
    }).pipe(catchError(this.handleError.logError))
  }

  doPut(){
    console.log(env.apiRoot);
    return this.http.put(`${env.apiRoot}/put`,{age:10},{
      params:{page:'10'},
      headers:this.headers,
    })
  }
}
