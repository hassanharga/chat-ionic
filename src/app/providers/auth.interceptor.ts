import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private tokenSer: TokenService) { }
    intercept(req: import('@angular/common/http').HttpRequest<any>,
              next: import('@angular/common/http').HttpHandler): import('rxjs').Observable<import('@angular/common/http').HttpEvent<any>> {

        const token = this.tokenSer.getToken();
        if (token) {
            const headersConfig = {
                'Content-Type': 'application/json',
                accept: 'application/json',
                Authorization: 'Bearer ' + token
            };
            const cloned = req.clone({
                setHeaders: headersConfig
            });
            return next.handle(cloned);
        } else {
            return next.handle(req);
        }

    }
}
