import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { StartComponent } from './start/start.component';


const appRoutes: Routes = [
  { path: 'chat/:teamName', component: ChatComponent},
  { path: 'start', component: StartComponent},
  { path: 'chat/:teamName/:threadName', component: ChatComponent},
  { path: '', redirectTo: '/start', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);