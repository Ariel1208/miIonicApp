import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GetServiceService } from '../get-service.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

   platillos: any = [];

  constructor(
    private menuCtrl: MenuController,
    private GetService:GetServiceService,
  ) { }

  ngOnInit() {
    this.platillosSemana();
  }

  
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
   }

   platillosSemana(){
     this.GetService.datosPlatillos().then(datos =>{
        this.platillos = datos;       
        console.log(datos);
          
     })
   }
  
  slidesOptions = {
    slidesPerView: 1.5
  }

}
