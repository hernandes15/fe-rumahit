import { NgModule} from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { StepsModule } from 'primeng/steps';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UiSwitchModule } from 'ngx-ui-switch';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MultiSelectModule } from 'primeng/multiselect';
import { PercentPipePipe } from './pipe/percent-pipe.pipe';
import { PercentDirectiveDirective } from './directive/percent-directive.directive';
import { NumberingIntDirective } from './directive/numbering-int.directive';
import { NumberingFloatDirective } from './directive/numbering-float.directive';
import { MenuMessageComponent } from './view/menu-message/menu-message.component';
import {CustomDatePipe} from './const/custom.datepipe';
import { HomeMenuComponent } from './view/home-menu/home-menu.component';
import { InputPerusahaanComponent } from './view/input-perusahaan/input-perusahaan.component';
import { InputTransaksiComponent } from './view/input-transaksi/input-transaksi.component';
import { LoginComponent } from './view/login/login.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    MessagesModule,
    MessageModule,
    UiSwitchModule.forRoot({
      size: 'small',
      color: '#0069d9',
      switchColor: '#ffffff',
      defaultBgColor: '#e3e3e3',
      defaultBoColor: '#ffffff',
      checkedTextColor: "#ffffff",
      uncheckedTextColor: "black"
    }),
    InputSwitchModule,
    ProgressSpinnerModule,
    TabViewModule,
    InputTextareaModule,
    MenuModule,
    StepsModule,
    KeyFilterModule,
    MultiSelectModule,
    CheckboxModule,
    RadioButtonModule,
    ToastModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'english'
    })

  ],
  declarations: [
    AppComponent,
    PercentPipePipe,
    PercentDirectiveDirective,
    NumberingIntDirective,
    NumberingFloatDirective,
    MenuMessageComponent,
    CustomDatePipe,
    HomeMenuComponent,
    InputPerusahaanComponent,
    InputTransaksiComponent,
    LoginComponent
  ],
  bootstrap: [],
  providers: [PercentPipePipe, DatePipe, DecimalPipe],

  
})

export class AppCommonModule { }
