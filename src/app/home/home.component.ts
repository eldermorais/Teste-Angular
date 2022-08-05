import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public form: FormGroup;

  numberColumnsAndRows: number;

  public listRotate: number[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.formInit();
  }

  formInit(){
    this.form = new FormGroup({
      numbers: new FormControl (undefined, [Validators.required])
    })
  }

  public get numbers(): FormControl {
    return this.form.get('numbers') as FormControl;
  }

  isValid(listNumbers: number[]){
    this.numberColumnsAndRows = Math.sqrt(listNumbers.length);
    if(Number.isInteger(this.numberColumnsAndRows)){
      return true;
    }
    this.numbers.setErrors({
      invalidQuantity: true
    })
    return false;
  }

  getErrorMessage() {
    return this.numbers.hasError('required') ? 'Campo Obrigatório.' :
        this.numbers.hasError('invalidQuantity') ? 'Quantidade de números inválido.' :
        '';
  }


  rotate(){
    const listNumbers: number[] = [];    
    this.numbers.value.split(',').map((item: number) => {
      listNumbers.push(Number(item));
    })

    if(this.isValid(listNumbers)){

      let rightColunmNumberIncrement: number = (this.numberColumnsAndRows * 2) - 1;
      let leftColunmNumberDecrement: number = (listNumbers.length - ((this.numberColumnsAndRows * 2) - 1));
      
      this.listRotate.push(...listNumbers);
      
      /*
      Girar posições da tabela
      */
     
      for(let i = 0 ; i < this.numberColumnsAndRows - 1; i++){
  
        this.listRotate[i+1] = listNumbers[i];
        this.listRotate[rightColunmNumberIncrement] = listNumbers[rightColunmNumberIncrement - this.numberColumnsAndRows];
        this.listRotate[listNumbers.length - (i+2)] = listNumbers[listNumbers.length - (i+1)];
        this.listRotate[leftColunmNumberDecrement - 1] = listNumbers[listNumbers.length - (this.numberColumnsAndRows *(i+1))]
        
        rightColunmNumberIncrement += this.numberColumnsAndRows;
        leftColunmNumberDecrement -= this.numberColumnsAndRows;
  
      }
      this.router.navigateByUrl('/rotate',{
        state: this.listRotate
      })
    }
  }

}
