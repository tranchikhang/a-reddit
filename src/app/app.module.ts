import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { APP_INITIALIZER } from '@angular/core';
import { AppConfigService } from './services/app-config.service'

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            multi: true,
            deps: [AppConfigService],
            useFactory: (appConfigService: AppConfigService) => {
                return () => {
                    return appConfigService.loadAppConfig();
                };
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
