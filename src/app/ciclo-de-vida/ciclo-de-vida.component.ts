import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { RatingComponent } from '../utilidades/rating/rating.component';

@Component({
  selector: 'app-ciclo-de-vida',
  standalone: false,
  
  templateUrl: './ciclo-de-vida.component.html',
  styleUrl: './ciclo-de-vida.component.css'
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit{
  
  //No es un evento del ciclo de vida
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  @Input()
  titulo: string;


  @ViewChild(RatingComponent)
  ratingComponent: RatingComponent;
  
  //Variable que guarda una referencia del timer
  timer : ReturnType<typeof setInterval>;


  ngAfterViewInit(): void {
    console.log('on after view init');
    this.ratingComponent.ratingSeleccionado = 3;
    this.changeDetectorRef.detectChanges();
  }
  ngOnDestroy(): void {
    console.log('on destroy');
    clearInterval(this.timer);
  }

  ngDoCheck(): void {
    console.log('do check');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
    console.log(changes);
  }
  
  ngOnInit(): void {
    console.log('on init');
    this.timer = setInterval(() => console.log(new Date(), 1000));
  }



}
