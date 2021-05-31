import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetServiceService {
  

  url = 'https://miapp-tianguiztli.herokuapp.com/';

  constructor(public http: HttpClient) { }


  getUsers(){
    var newUrl = this.url+ 'Usuarios'
    return new Promise(resolve=>{
      this.http.get(newUrl).subscribe(data=>{
          resolve(data);
      },error=>{
        if(error) throw error;
      });
    });
  }

  LoginPost(data){
    var newUrl = this.url+ 'validacionUsuario'
    return new Promise((resolve, reject) =>{
      this.http.post(newUrl,data).subscribe(data=>{
          resolve (data);
      },error=>{
        if(error) throw error;
      });
    });
  }
}
