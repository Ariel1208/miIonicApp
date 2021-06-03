import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetServiceService {
  

  url = 'https://miapp-tianguiztli.herokuapp.com/';

  constructor(
    public http: HttpClient,
    ) { }

/*
  getUsers(){
    var newUrl = this.url+ 'Usuarios'
    return new Promise(resolve=>{
      this.http.get(newUrl).subscribe(data=>{
       // if(data.hasOwnProperty('id_usuario')){
          resolve(data);
       // }
      },error=>{
        if(error) throw error;
      });
    });
  }
*/
  LoginPost(data){
    var newUrl = this.url+ 'validacionUsuario'
     return new Promise((resolve,reject)=>{
      this.http.post(newUrl,data).subscribe({
        next(e){
          if(e['id_usuario']){
            window.localStorage['datosUsuario']= JSON.stringify(e);
            resolve(e);
          }else{
            reject(new Error("Algo malo a pasado"));
          }
        }
      })
    });
  }

  datosPlatillos(){
    var newUrl = this.url+ 'platillosSemanales'
    return new Promise((resolve,reject)=>{
     this.http.get(newUrl).subscribe({
       next(e){
         resolve(e[0]);
       /*  if(e['id_usuario']){
           window.localStorage['datosUsuario']= JSON.stringify(e);
           resolve(e);
         }else{
           reject(new Error("Algo malo a pasado"));
         }*/
       }
     })
   });
  }
}
