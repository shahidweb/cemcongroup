import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';

const components = [CarouselComponent, BannerComponent]
const modules = [RouterModule]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    NgbCarouselModule,
    ...modules
  ],
  exports: [...components, ...modules]
})
export class SharedModule { }
