import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-latposris',
  templateUrl: './latposris.page.html',
  styleUrls: ['./latposris.page.scss'],
})
export class LatposrisPage implements OnInit {




  constructor(public element: ElementRef) { 
    

  }

  elem : any;
  elem2 : any;
  elem3 : any;
  revealBox : any;
  skor : any;
  skorBox : any;
  benar1 : any;
  benar2 : any;
  benar3 : any;
  benar4 : any;
  benar5 : any;
  benar6 : any;
  benar7 : any;
  benar8 : any;
  benar9 : any;
  benar10 : any;
  count : any;

  pilihana1 : any;
  pilihanb1 : any;
  pilihanc1 : any;
  pilihand1 : any; 
  soal1 : any;
  danger1 : any;
  bloksoal1 : any;

  pilihana2 : any;
  pilihanb2 : any;
  pilihanc2 : any;
  pilihand2 : any; 
  soal2 : any;
  danger2 : any;
  bloksoal2 : any;

  pilihana3 : any;
  pilihanb3 : any;
  pilihanc3 : any;
  pilihand3 : any; 
  soal3 : any;
  danger3 : any;
  bloksoal3 : any;

  pilihana4 : any;
  pilihanb4 : any;
  pilihanc4 : any;
  pilihand4 : any; 
  soal4 : any;
  danger4 : any;
  bloksoal4 : any;

  pilihana5 : any;
  pilihanb5 : any;
  pilihanc5 : any;
  pilihand5 : any; 
  soal5 : any;
  danger5 : any;
  bloksoal5 : any;

  pilihana6 : any;
  pilihanb6 : any;
  pilihanc6 : any;
  pilihand6 : any; 
  soal6 : any;
  danger6 : any;
  bloksoal6 : any;

  pilihana7 : any;
  pilihanb7 : any;
  pilihanc7 : any;
  pilihand7 : any; 
  soal7 : any;
  danger7 : any;
  bloksoal7 : any;

  pilihana8 : any;
  pilihanb8 : any;
  pilihanc8 : any;
  pilihand8 : any; 
  soal8 : any;
  danger8 : any;
  bloksoal8 : any;

  pilihana9 : any;
  pilihanb9 : any;
  pilihanc9 : any;
  pilihand9 : any; 
  soal9 : any;
  danger9 : any;
  bloksoal9 : any;

  pilihana10 : any;
  pilihanb10 : any;
  pilihanc10 : any;
  pilihand10 : any; 
  soal10 : any;
  danger10 : any;
  bloksoal10 : any;

  elem4 : any;
  i : any;

  soals : Array<any>;
  bloksoals : Array<any>;
  dangers : Array<any>;

  evalBtn : any;
  elem5 : any;
  
  
  ngAfterViewInit() {
	  
	this.initiate();
  
	

  }

  ngOnInit() {
  }

  evaluate(){
    this.count = 0;

    if(this.benar1.checked){
      this.count = this.count + 10;
      this.soals[0] = 'true';

    }
    if(this.benar2.checked){
      this.count = this.count + 10;
      this.soals[1] = 'true';

    }
    if(this.benar3.checked){
      this.count = this.count + 10;
      this.soals[2] = 'true';

    }
    if(this.benar4.checked){
      this.count = this.count + 10;
      this.soals[3] = 'true';
    }
    if(this.benar5.checked){
      this.count = this.count + 10;
      this.soals[4] = 'true';
    }
    if(this.benar6.checked){
      this.count = this.count + 10;
      this.soals[5] = 'true';
    }
    if(this.benar7.checked){
      this.count = this.count + 10;
      this.soals[6] = 'true';
    }
    if(this.benar8.checked){
      this.count = this.count + 10;
      this.soals[7] = 'true';
    }
    if(this.benar9.checked){
      this.count = this.count + 10;
      this.soals[8] = 'true';
    }
    if(this.benar10.checked){
      this.count = this.count + 10;
      this.soals[9] = 'true';
    }
    
    this.skor.innerHTML = this.count;
  }

  reveal(){
    
    if(this.revealBox.style.display != 'none'){
      this.revealBox.style.display = 'none';
      this.skorBox.style.display = 'none';

      
      this.unmarkGreen();
      this.unmarkRed();
      
      
    }else if(this.revealBox.style.display == 'none'){
      this.revealBox.style.display = 'inline';
      this.skorBox.style.display = 'inline';
      this.evaluate();
      this.markGreen();
      this.markRed();
      this.lock();
      this.evalBtn.style.display = 'none';
    }
  }

  markGreen(){
    for(this.i = 0; this.i < 10; this.i++){
      this.elem4[this.i].style.background = 'green';
     
    }
  }
  
  markRed(){
    for(this.i = 0; this.i < 10; this.i++){
      if(this.soals[this.i] != 'true'){
        this.bloksoals[this.i].style.background = 'rgba(255,0,0,0.5)';
        this.dangers[this.i].style.display = 'inline-block';
      }
    }
  }

  unmarkGreen(){
    for(this.i = 0; this.i < 10; this.i++){
      this.elem4[this.i].style.background = 'rgba(0,0,0,0)';
     
    }
  }
  
  unmarkRed(){
    for(this.i = 0; this.i < 10; this.i++){
      if(this.soals[this.i] != 'true'){
        this.bloksoals[this.i].style.background = 'rgba(255,0,0,0)';
        this.dangers[this.i].style.display = 'none';
      }
    }
  }

  initMargin(){
    for(this.i = 0; this.i < this.elem2.length; this.i++){
      this.elem2[this.i].style.marginTop = '2vw';
    }
  }
  
  lock(){
    for(this.i = 0; this.i < this.elem2.length; this.i++){
        this.elem2[this.i].disabled = true;
        console.log(this.elem2[this.i].disabled);
    }
  }
  
  
  initiate(){
	  this.elem = this.element.nativeElement as HTMLElement;
    this.elem = this.elem.getElementsByTagName('div');
    
    this.elem2 = this.element.nativeElement as HTMLElement;
    this.elem2 = this.elem2.getElementsByTagName('input');
    
    this.elem3 = this.element.nativeElement as HTMLElement;
    this.elem3 = this.elem3.getElementsByTagName('p');
    
    this.elem4 = this.element.nativeElement as HTMLElement;
    this.elem4 = this.elem4.getElementsByClassName('benar');
    
    this.elem5 = this.element.nativeElement as HTMLElement;
    this.elem5 = this.elem5.getElementsByTagName('ion-col');
    
    this.skor = this.elem3.namedItem('skor');
    this.revealBox = this.elem.namedItem('reveal');
    this.skorBox = this.elem.namedItem('skorBox');
    this.benar1 = this.elem2.namedItem('benar1');
    this.benar2 = this.elem2.namedItem('benar2');
    this.benar3 = this.elem2.namedItem('benar3');
    this.benar4 = this.elem2.namedItem('benar4');
    this.benar5 = this.elem2.namedItem('benar5');
    this.benar6 = this.elem2.namedItem('benar6');
    this.benar7 = this.elem2.namedItem('benar7');
    this.benar8 = this.elem2.namedItem('benar8');
    this.benar9 = this.elem2.namedItem('benar9');
    this.benar10 = this.elem2.namedItem('benar10');

    this.bloksoal1 = this.elem.namedItem('soal1');
    this.bloksoal2 = this.elem.namedItem('soal2');
    this.bloksoal3 = this.elem.namedItem('soal3');
    this.bloksoal4 = this.elem.namedItem('soal4');
    this.bloksoal5 = this.elem.namedItem('soal5');
    this.bloksoal6 = this.elem.namedItem('soal6');
    this.bloksoal7 = this.elem.namedItem('soal7');
    this.bloksoal8 = this.elem.namedItem('soal8');
    this.bloksoal9 = this.elem.namedItem('soal9');
    this.bloksoal10 = this.elem.namedItem('soal10');

    this.danger1 = this.elem.namedItem('danger1');
    this.danger2 = this.elem.namedItem('danger2');
    this.danger3 = this.elem.namedItem('danger3');
    this.danger4 = this.elem.namedItem('danger4');
    this.danger5 = this.elem.namedItem('danger5');
    this.danger6 = this.elem.namedItem('danger6');
    this.danger7 = this.elem.namedItem('danger7');
    this.danger8 = this.elem.namedItem('danger8');
    this.danger9 = this.elem.namedItem('danger9');
    this.danger10 = this.elem.namedItem('danger10');

    
    this.evalBtn = this.elem5.namedItem('evalButton');

    this.initMargin();

    
    this.soals = [this.soal1,this.soal2,this.soal3,this.soal4,this.soal5,this.soal6,this.soal7,this.soal8,this.soal9,this.soal10];
	  this.bloksoals = [this.bloksoal1,this.bloksoal2,this.bloksoal3,this.bloksoal4,this.bloksoal5,this.bloksoal6,this.bloksoal7,this.bloksoal8,this.bloksoal9,this.bloksoal10];
    this.dangers = [this.danger1,this.danger2,this.danger3,this.danger4,this.danger5,this.danger6,this.danger7,this.danger8,this.danger9,this.danger10];
  }


}
