import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart/cart.component';
import { MaterialModule } from 'src/app/material/material.module';
import { PricePipe } from 'src/shared/pipes/price.pipe';

@NgModule({
  declarations: [CartComponent, CartItemComponent, PricePipe],
  imports: [CommonModule, MaterialModule, CartRoutingModule],
})
export class CartModule {}
