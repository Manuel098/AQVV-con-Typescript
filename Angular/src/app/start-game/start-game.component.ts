import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material'
import { MessageComponent } from '../modals/message/message.component';
import { Globals } from '../../globals';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {

  constructor(private dialog: MatDialog, private global:Globals) { }
  labelAsk = 'Iniciemos el Juego';
  validator = 0;
  answerOrden = [];
  personajeVa = [];
  newPer = [];
  preguntas = [];
  contadorX = 0;
  contadory = 0;
  porcen = 0;
  personajes;
  answer;
  result;

  ngOnInit() {
    this.global.getUsersWith().then(res => {
      this.personajes = res['data'];
    });
  }
  resTar(){
    this.contadorX = 0;
    this.porcen =0;
    this.contadory = 0;
    this.validator = 1;
    this.answer=this.answerOrden[this.contadorX][this.contadory]['answer'];
  }
  run(){
    this.personajes.forEach(element => {
      var characteristics = element["characteristics"];
      this.personajeVa.push({
        name: element['username'],
        url: element['user_url'],
        porcentaje: 0
      });
      if(characteristics){
        characteristics.forEach(other => {
          this.preguntas.push({
            answer:'Tu personaje tiene '+other['CharacteristicValue']+' '+other['valueChar'],
            value:other['valueChar'],
            name: element['username'],
            id: other['characteristicId']
          });
        });
      }
    });

    for (let i = 0; i < this.preguntas.length; i++) {
      var fila = [];
      this.preguntas.forEach(element => {
        if(element['id']==i){
          fila.push(element);
        }
      });
      if(fila.length>0)
        this.answerOrden.push(fila);
    }
    this.answer=this.answerOrden[this.contadorX][this.contadory]['answer'];
    
    const dialogStart = this.dialog.open(MessageComponent, {data:{message:'Listo para iniciar el juego'}});
    dialogStart.afterClosed().subscribe(result => {
      this.validator = 1;
    });
  }

  onValid(value:boolean){
    if(value){
      this.positive();
      if (this.answerOrden.length<=this.contadorX+1) {
        this.onFinish();
      }else{
        this.contadorX++;
        this.contadory=0;
      }
    }else{
      if(this.answerOrden[this.contadorX].length<=this.contadory+1){
        if (this.answerOrden.length<=this.contadorX+1) {
          this.onFinish();
        }else{
          this.contadorX++;
          this.contadory=0;
        }
      }else{
        this.contadory++;
      }
    }
    this.answer=this.answerOrden[this.contadorX][this.contadory]['answer'];
  }
  positive(){
    this.answerOrden[this.contadorX].forEach(element => {
      if(this.answer == element['answer']){
        this.personajeVa.forEach(other => {
          if(other['name']==element['name']){
            other['porcentaje'] +=2;
          }
        });
      }
    });
  }
  onFinish(){
    this.personajeVa.forEach(element => {
      if(element['porcentaje']>this.porcen){
        this.result = {name:element['name'], url:element['url']}
        this.porcen = element['porcentaje'];
      }
    });
    this.validator = 2;
  }


  confirm(value:boolean){
    value?this.validator=4:this.reConfirm();
  }
  reConfirm(){
    this.validator = 3;
    this.newPer = [];
    var newPor=0;
    this.personajeVa.forEach(element => {
      if(element['porcentaje']!=this.porcen){
        if(element['porcentaje']>newPor){
          this.newPer.push ({name:element['name'], url:element['url']});
          newPor = element['porcentaje'];
        } 
      }
    });
  }
}
