import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.page.html',
  styleUrls: ['./cover.page.scss'],
})
export class CoverPage implements OnInit{


  constructor (public element: ElementRef) {
    //private platform: Platform;


   }


    

  

  elem : any;

  module : any;
  

  ngAfterViewInit() {  
    this.initiate();
  }

 


  ngOnInit() {
  }

  
   
  
    
    
    klik(){
      this.module.style.left = '0';
      //navigator['app'].exitApp();
    }

    klik2(){
      
      navigator['app'].exitApp();
    }

    klik3(){
      
      this.module.style.left = '100vw';
    }


    
    initiate(){
      this.elem = this.element.nativeElement as HTMLElement;
      this.elem = this.elem.getElementsByTagName('div');
    
      this.module = this.elem.namedItem('module');
      
  
    }


}
