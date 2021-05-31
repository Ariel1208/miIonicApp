import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'

import { GetServiceService } from '../get-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router : Router, private GetService:GetServiceService) { }

  ngOnInit() {
  //  this.getUsuarios();
  }
  

  login(user,pass){
    var data = {
      "email": user.value,
      "pass": pass.value
    }
    
    this.GetService.LoginPost(data).then(data =>{
      if(data.hasOwnProperty('id_usuario')){
        console.log("Usuario existente");
      }else{
        console.log("Usuario Inexistente");
      };
     
    });
        
  }


  getUsuarios(){
    this.GetService.getUsers().then(data =>{
      console.log(data);
    })
  }

}
