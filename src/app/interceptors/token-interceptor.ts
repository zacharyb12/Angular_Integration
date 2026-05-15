import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Authservice } from '../services/auth-service/authservice';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  
  const auth = inject(Authservice)

  const token = auth.getToken();
  

  if(token)
  {
    const clonedReq = req.clone({
      setHeaders : {Authorization : `Bearer ${token}`}
    });

    return  next(clonedReq)
  }
  return next(req);
};
