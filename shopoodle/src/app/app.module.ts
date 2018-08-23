import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ShoppingCartModule} from 'ng-shopping-cart'; // <-- Import the module class


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ShoppingCartModule.forRoot({ // <-- Add the cart module to your root module
        // itemType: MyCartItemClass, // <-- Configuration is optional
        // serviceType: 'localStorage',
        // serviceOptions: {
        //     storageKey: 'NgShoppingCart',
        //     clearOnError: true
        // }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
