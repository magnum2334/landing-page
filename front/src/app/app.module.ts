import { ModalEmailComponent } from './components/modal-email/modal-email.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEncuestasComponent } from './components/form-encuestas/form-encuestas.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { HttpClientModule } from '@angular/common/http';
import { AngularSignaturePadModule } from '@almothafar/angular-signature-pad';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NavsiderAdminComponent } from './admin/navsider-admin/navsider-admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PresentacionComponent } from './landing-page/presentacion/presentacion.component';
import { ContentPageComponent } from './landing-page/content-page/content-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PresentationAdminComponent } from './admin/navsider-admin/presentation-admin/presentation-admin.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ModalAdminPresentationComponent } from './admin/navsider-admin/presentation-admin/modal-admin-presentation/modal-admin-presentation.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ContactComponent } from './landing-page/contact/contact.component';
import { PropuestaPrincipalComponent } from './landing-page/propuesta-principal/propuesta-principal.component';
import { CommonModule } from '@angular/common';
import { CarouserDynamicComponent } from './landing-page/carouser-dynamic/carouser-dynamic.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { SmsMasivosComponent } from './components/sms-masivos/sms-masivos.component';
import { ModalDesarrolloSocialComponent } from './components/modal-desarrollo-social/modal-desarrollo-social.component';
import { BottomSheetOverviewExampleSheetComponent } from './components/bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    PropuestaPrincipalComponent,
    AppComponent,
    FormEncuestasComponent,
    LoginComponent,
    LandingPageComponent,
    PageErrorComponent,
    NavsiderAdminComponent,
    ModalEmailComponent,
    PresentacionComponent,
    ContentPageComponent,
    PresentationAdminComponent,
    ModalAdminPresentationComponent,
    ContactComponent,
    CarouserDynamicComponent,
    SmsMasivosComponent,
    ModalDesarrolloSocialComponent,
    BottomSheetOverviewExampleSheetComponent,
  ],
  imports: [
    MatRadioModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatTooltipModule,
    MatTableModule,
    ClipboardModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatStepperModule,
    MatSliderModule,
    NgxCaptchaModule,
    MatBottomSheetModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatSelectModule,
    AngularSignaturePadModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatProgressBarModule, MatTabsModule,
    MatToolbarModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatTableModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatBottomSheetModule,
    AngularSignaturePadModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule, MatTabsModule,
    MatDialogModule,]
})
export class AppModule { }
