import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculoMedi/ArteSuave';

  public codigoRMA : number = 654789 ;
  public nome : string = 'Nome';
  public nota1 : number = 11;
  public nota2 : number = 20;
  public nota3 : number = 6;
  public nota4 : number = 8;
  public media : number = (this.nota1+this.nota2+this.nota3+this.nota4 )/4 ;
  public aprovado : boolean = true;
  public reprovado : boolean= false;
  public foto : string = 'assets/img/kisspng-calculator-3d-circle-android-calculator-5ab71dcdd3c1a4.7105792815219501578674.jpg';
  datavalidade:string = '2021-10-12'

  constructor()
  {
    //variavel com concatenação
    console.log('CodigoRMA :', this.codigoRMA  = 654789 );
    console.log('Nome :', this.nome);
    console.log('Nota1 :', this.nota1);
    console.log('Nota2 :', this.nota2);
    console.log('Nota3 :', this.nota3);
    console.log('Nota4 :', this.nota4);
    console.log('Media :', this.media);

        this.media = (this.nota1 + this.nota2 + this.nota3 + this.nota4)/4;

        this.media
        console.log(' Média :',this.media)

        if (this.media >= 7)
        {
          console.log(' Aprovado !',this.media)

        }
        else
        {
          console.log(' Reprovado ! ', this.media);
        }

 }
  ngOnInit(): void {

  }

}
