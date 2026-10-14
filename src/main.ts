import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/app-environment';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const urlParams = new URLSearchParams(window.location.search);
if (environment.production && urlParams.get('DSShowLog') !== "79979") {
  console.log = () => {}; // 關閉 log
  console.warn = () => {}; // 關閉 warning
}