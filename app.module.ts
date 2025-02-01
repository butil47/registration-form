import { NgModule } from '@angular/core'; // Core Angular module
import { BrowserModule } from '@angular/platform-browser'; // Browser support for Angular apps
import { FormsModule } from '@angular/forms'; // For forms handling (optional)
import{ ReactiveFormsModule} from '@angular/forms';
import{AppComponent} from './app.component';
import{ SignUpComponent} from './sign-up/sign-up.component';


@NgModule({
  imports: [
    BrowserModule,  
    FormsModule,
    ReactiveFormsModule,
    AppComponent,
    SignUpComponent    
  ], 
})
export class AppModule {}