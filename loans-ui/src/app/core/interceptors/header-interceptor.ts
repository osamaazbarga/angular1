import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HeadersInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //we will add our logic here
        const myToken='AFfdsfdsDFF'
        const modifiedRequest=req.clone({
            url:req.url.replace('http','https'),
            headers:req.headers.set('Authorization',myToken)
        })

        console.log('in interceptor ',modifiedRequest,next);
        
        return next.handle(modifiedRequest)
    }
}