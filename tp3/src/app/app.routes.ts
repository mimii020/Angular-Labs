import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { AppComponent } from './app.component';
import { RainbowComponent } from './rainbow/rainbow.component';


export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'cv', component: CvComponent},
    {path: 'business-card', component: BusinessCardComponent},
    {path: 'color-changer', component: ColorChangerComponent},
    {path: 'mini-word', component: MiniWordComponent},
    {path: 'rainbow', component: RainbowComponent}

];

export const routing = RouterModule.forRoot(routes);