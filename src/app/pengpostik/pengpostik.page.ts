import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-pengpostik',
  templateUrl: './pengpostik.page.html',
  styleUrls: ['./pengpostik.page.scss'],
})
export class PengpostikPage implements OnInit {

  constructor(public element: ElementRef) { }

  ngOnInit() {
  }


  elem : any;
  elem2 : any;
  salah1 : any;
  salah2 : any;
  salah3 : any;
  salah4 : any;
  salah5 : any;
  salah6 : any;
  salah7 : any;
  salah8 : any;

  key1 : any;
  key2 : any;
  key3 : any;
  key4 : any;
  key5 : any;
  key6 : any;
  key7 : any;
  key8 : any;

  cek1 : any;
  cek2 : any;
  cek3 : any;
  cek4 : any;
  cek5 : any;
  cek6 : any;
  cek7 : any;
  cek8 : any;


  kunci1 : any;
  kunci2 : any;
  kunci3 : any;
  kunci4 : any;
  kunci5 : any;
  kunci6 : any;
  kunci7 : any;
  kunci8 : any;

  inputL1 : any;
  inputL2 : any;
  inputL3 : any;
  inputL4 : any;
  inputL5 : any;
  inputL6 : any;
  inputL7 : any;
  inputL8 : any;


  inputR1 : any;
  inputR2 : any;
  inputR3 : any;
  inputR4 : any;
  inputR5 : any;
  inputR6 : any;
  inputR7 : any;
  inputR8 : any;

  bener1 : any;
  bener2 : any;
  bener3 : any;
  bener4 : any;
  bener5 : any;
  bener6 : any;
  bener7 : any;
  bener8 : any;

  key(pilihan : any){
    if(pilihan == 1){
      this.kunci1.style.display = 'inline-block';
    }else if(pilihan == 2){
      this.kunci2.style.display = 'inline-block';
    }else if(pilihan == 3){
      this.kunci3.style.display = 'inline-block';
    }else if(pilihan == 4){
      this.kunci4.style.display = 'inline-block';
    }else if(pilihan == 5){
      this.kunci5.style.display = 'inline-block';
    }else if(pilihan == 6){
      this.kunci6.style.display = 'inline-block';
    }else if(pilihan == 7){
      this.kunci7.style.display = 'inline-block';
    }else if(pilihan == 8){
      this.kunci8.style.display = 'inline-block';
    }
  }

  show(pilihan : any){
    if(pilihan == 1){
      if(this.inputL1.value != '' && this.inputR1.value != ''){
        this.cek1.style.display = 'inline-block';
      }else{
        this.cek1.style.display = 'none';
        this.kunci1.style.display = 'none';
        this.salah1.style.display = 'none';
        this.key1.style.display = 'none';
        this.bener1.style.display = 'none';
      }
      
    }else if(pilihan == 2){
      if(this.inputL2.value != '' && this.inputR2.value != ''){
        this.cek2.style.display = 'inline-block';
      }else{
        this.cek2.style.display = 'none';
        this.kunci2.style.display = 'none';
        this.salah2.style.display = 'none';
        this.key2.style.display = 'none';
        this.bener2.style.display = 'none';
      }
      
    }else if(pilihan == 3){
      if(this.inputL3.value != '' && this.inputR3.value != ''){
        this.cek3.style.display = 'inline-block';
      }else{
        this.cek3.style.display = 'none';
        this.kunci3.style.display = 'none';
        this.salah3.style.display = 'none';
        this.key3.style.display = 'none';
        this.bener3.style.display = 'none';
      }
      
    }else if(pilihan == 4){
      if(this.inputL4.value != '' && this.inputR4.value != ''){
        this.cek4.style.display = 'inline-block';
      }else{
        this.cek4.style.display = 'none';
        this.kunci4.style.display = 'none';
        this.salah4.style.display = 'none';
        this.key4.style.display = 'none';
        this.bener4.style.display = 'none';
      }
      
    }else if(pilihan == 5){
      if(this.inputL5.value != '' && this.inputR5.value != ''){
        this.cek5.style.display = 'inline-block';
      }else{
        this.cek5.style.display = 'none';
        this.kunci5.style.display = 'none';
        this.salah5.style.display = 'none';
        this.key5.style.display = 'none';
        this.bener5.style.display = 'none';
      }
      
    }else if(pilihan == 6){
      if(this.inputL6.value != '' && this.inputR6.value != ''){
        this.cek6.style.display = 'inline-block';
      }else{
        this.cek6.style.display = 'none';
        this.kunci6.style.display = 'none';
        this.salah6.style.display = 'none';
        this.key6.style.display = 'none';
        this.bener6.style.display = 'none';
      }
      
    }else if(pilihan == 7){
      if(this.inputL7.value != '' && this.inputR7.value != ''){
        this.cek7.style.display = 'inline-block';
      }else{
        this.cek7.style.display = 'none';
        this.kunci7.style.display = 'none';
        this.salah7.style.display = 'none';
        this.key7.style.display = 'none';
        this.bener7.style.display = 'none';
      }
      
    }else if(pilihan == 8){
      if(this.inputL8.value != '' && this.inputR8.value != ''){
        this.cek8.style.display = 'inline-block';
      }else{
        this.cek8.style.display = 'none';
        this.kunci8.style.display = 'none';
        this.salah8.style.display = 'none';
        this.key8.style.display = 'none';
        this.bener8.style.display = 'none';
      }
      
    }
  }


  cek(pilihan : any){
    if(pilihan == 1){
      this.key1.style.display = 'inline-block';
      if(this.inputL1.value != 'F' || this.inputR1.value != '7'){
        this.salah1.style.display = 'inline-block';
        this.bener1.style.display = 'none';
      }else if(this.inputL1.value == 'F' && this.inputR1.value == '7'){
        this.salah1.style.display = 'none';
        this.bener1.style.display = 'inline-block';
      }
    }else if(pilihan == 2){
      this.key2.style.display = 'inline-block';
      if(this.inputL2.value != 'D' || this.inputR2.value != '4'){
        this.salah2.style.display = 'inline-block';
        this.bener2.style.display = 'none';
      }else if(this.inputL2.value == 'D' && this.inputR2.value == '4'){
        this.salah2.style.display = 'none';
        this.bener2.style.display = 'inline-block';
      }
    }else if(pilihan == 3){
      this.key3.style.display = 'inline-block';
      if(this.inputL3.value != 'E' || this.inputR3.value != '5'){
        this.salah3.style.display = 'inline-block';
        this.bener3.style.display = 'none';
      }else if(this.inputL3.value == 'E' && this.inputR3.value == '5'){
        this.salah3.style.display = 'none';
        this.bener3.style.display = 'inline-block';
      }
    }else if(pilihan == 4){
      this.key4.style.display = 'inline-block';
      if(this.inputL4.value != 'I' || this.inputR4.value != '5'){
        this.salah4.style.display = 'inline-block';
        this.bener4.style.display = 'none';
      }else if(this.inputL4.value == 'I' && this.inputR4.value == '5'){
        this.salah4.style.display = 'none';
        this.bener4.style.display = 'inline-block';
      }
    }else if(pilihan == 5){
      this.key5.style.display = 'inline-block';
      if(this.inputL5.value != 'J' || this.inputR5.value != '7'){
        this.salah5.style.display = 'inline-block';
        this.bener5.style.display = 'none';
      }else if(this.inputL5.value == 'J' && this.inputR5.value == '7'){
        this.salah5.style.display = 'none';
        this.bener5.style.display = 'inline-block';
      }
    }else if(pilihan == 6){
      this.key6.style.display = 'inline-block';
      if(this.inputL6.value != 'J' || this.inputR6.value != '6'){
        this.salah6.style.display = 'inline-block';
        this.bener6.style.display = 'none';
      }else if(this.inputL6.value == 'J' && this.inputR6.value == '6'){
        this.salah6.style.display = 'none';
        this.bener6.style.display = 'inline-block';
      }
    }else if(pilihan == 7){
      this.key7.style.display = 'inline-block';
      if(this.inputL7.value != 'O' || this.inputR7.value != '6'){
        this.salah7.style.display = 'inline-block';
        this.bener7.style.display = 'none';
      }else if(this.inputL7.value == 'O' && this.inputR7.value == '6'){
        this.salah7.style.display = 'none';
        this.bener7.style.display = 'inline-block';
      }
    }else if(pilihan == 8){
      this.key8.style.display = 'inline-block';
      if(this.inputL8.value != 'L' || this.inputR8.value != '8'){
        this.salah8.style.display = 'inline-block';
        this.bener8.style.display = 'none';
      }else if(this.inputL8.value == 'L' && this.inputR8.value == '8'){
        this.salah8.style.display = 'none';
        this.bener8.style.display = 'inline-block';
      }
    }
  }
  
  ngAfterViewInit() {
    this.initiate();
    }

    initiate(){
      this.elem = this.element.nativeElement as HTMLElement;
      this.elem = this.elem.getElementsByTagName('div');

      this.elem2 = this.element.nativeElement as HTMLElement;
      this.elem2 = this.elem2.getElementsByTagName('input');
    
      this.salah1 = this.elem.namedItem('salah1');
      this.salah2 = this.elem.namedItem('salah2');
      this.salah3 = this.elem.namedItem('salah3');
      this.salah4 = this.elem.namedItem('salah4');
      this.salah5 = this.elem.namedItem('salah5');
      this.salah6 = this.elem.namedItem('salah6');
      this.salah7 = this.elem.namedItem('salah7');
      this.salah8 = this.elem.namedItem('salah8');

      this.cek1 = this.elem.namedItem('cek1');
      this.cek2 = this.elem.namedItem('cek2');
      this.cek3 = this.elem.namedItem('cek3');
      this.cek4 = this.elem.namedItem('cek4');
      this.cek5 = this.elem.namedItem('cek5');
      this.cek6 = this.elem.namedItem('cek6');
      this.cek7 = this.elem.namedItem('cek7');
      this.cek8 = this.elem.namedItem('cek8');

      this.key1 = this.elem.namedItem('key1');
      this.key2 = this.elem.namedItem('key2');
      this.key3 = this.elem.namedItem('key3');
      this.key4 = this.elem.namedItem('key4');
      this.key5 = this.elem.namedItem('key5');
      this.key6 = this.elem.namedItem('key6');
      this.key7 = this.elem.namedItem('key7');
      this.key8 = this.elem.namedItem('key8');

      this.kunci1 = this.elem.namedItem('kunci1');
      this.kunci2 = this.elem.namedItem('kunci2');
      this.kunci3 = this.elem.namedItem('kunci3');
      this.kunci4 = this.elem.namedItem('kunci4');
      this.kunci5 = this.elem.namedItem('kunci5');
      this.kunci6 = this.elem.namedItem('kunci6');
      this.kunci7 = this.elem.namedItem('kunci7');
      this.kunci8 = this.elem.namedItem('kunci8');

      this.bener1 = this.elem.namedItem('bener1');
      this.bener2 = this.elem.namedItem('bener2');
      this.bener3 = this.elem.namedItem('bener3');
      this.bener4 = this.elem.namedItem('bener4');
      this.bener5 = this.elem.namedItem('bener5');
      this.bener6 = this.elem.namedItem('bener6');
      this.bener7 = this.elem.namedItem('bener7');
      this.bener8 = this.elem.namedItem('bener8');

      this.inputL1 = this.elem2.namedItem('inputL1');
      this.inputL2 = this.elem2.namedItem('inputL2');
      this.inputL3 = this.elem2.namedItem('inputL3');
      this.inputL4 = this.elem2.namedItem('inputL4');
      this.inputL5 = this.elem2.namedItem('inputL5');
      this.inputL6 = this.elem2.namedItem('inputL6');
      this.inputL7 = this.elem2.namedItem('inputL7');
      this.inputL8 = this.elem2.namedItem('inputL8');

      this.inputR1 = this.elem2.namedItem('inputR1');
      this.inputR2 = this.elem2.namedItem('inputR2');
      this.inputR3 = this.elem2.namedItem('inputR3');
      this.inputR4 = this.elem2.namedItem('inputR4');
      this.inputR5 = this.elem2.namedItem('inputR5');
      this.inputR6 = this.elem2.namedItem('inputR6');
      this.inputR7 = this.elem2.namedItem('inputR7');
      this.inputR8 = this.elem2.namedItem('inputR8');
      

      
  
    }

}
