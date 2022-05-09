import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorHandlerInterceptor } from "./error-handler.interceptor";
import { HeadersInterceptor } from "./header-interceptor";

export const HttpInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:HeadersInterceptor,
        multi:true
    },

    {
        provide:HTTP_INTERCEPTORS,
        useClass:ErrorHandlerInterceptor,
        multi:true
    }
]

