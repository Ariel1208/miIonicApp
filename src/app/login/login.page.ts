import { Component, OnInit } from '@angular/core';

import { GetServiceService } from '../get-service.service';
import {Router} from '@angular/router'

import {  MenuController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private GetService:GetServiceService,
    public loadingController: LoadingController,
    private menuCtrl: MenuController,
    private router : Router,
    ) { }

  ngOnInit() {
  
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

  login(user,pass){
    var data = {
      "email": user.value,
      "pass": pass.value
    }
    
    this.GetService.LoginPost(data).then((res)=>{
     this.presentLoading(res['nombre']).then(()=>{
        this.router.navigate(['/inicio']);
     })
    }).catch(err =>{
      console.log(err);
    })
  }

  mostrarDatosUsuario(){
    console.log(JSON.parse(window.localStorage.getItem('datosUsuario')));
  }


  async presentLoading(nom:string) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Bienvenido '+nom,
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
