import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';
import { AppComponent } from './app.component';
import { AuthenticationFormComponent } from './components/authentication-form/authentication-form.component';
import { ImageLoopComponent } from './components/image-loop/image-loop.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'cv', component: CvComponent },
  { path: 'auth-form', component: AuthenticationFormComponent},
  { path: 'image-loop', component: ImageLoopComponent},
];

export const routing = RouterModule.forRoot(routes);
