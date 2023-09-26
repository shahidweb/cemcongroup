import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

const components = [CarouselComponent]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  exports: [...components]
})
export class SharedModule { }
