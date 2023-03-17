import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('base request', req);
        // const modifiedReq = req.clone;
        // // we can set our headers
        // modifiedReq.headers.set("test", "testnew");

        // //set new header application/json
        // modifiedReq.headers.set("Content-type", "application/json");
        // console.log('modified req', modifiedReq);


        // return next.handle(modifiedReq);


        return next.handle(req.clone({
            url: req.url.replace("http://", "https://")
        }));
    }
}
