import {provideRouter, RouterConfig} from '@angular/router';

import {AppComponent} from './app.component';
import {ActionRoutes} from './action/action.route';
//import {ActionComponent} from './action/action.component';
import {EventComponent} from './event/event.component';
import {TaskComponent} from './task/task.component';
import {WipSettingComponent} from './wip-setting/wip-setting.component';
import {SysSettingComponent} from './sys-setting/sys-setting.component';
import {HistoryComponent} from './history/history.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: 'Action',
        pathMatch: 'full',
    },
    ...ActionRoutes,
    {
        path : 'Event',
        component: EventComponent,
    },
    {
        path : 'Task',
        component: TaskComponent,
    },
    {
        path : 'WipSetting',
        component: WipSettingComponent,
    },
    {
        path : 'SysSetting',
        component: SysSettingComponent,
    },
    {
        path : 'History',
        component: HistoryComponent,
    },
];

export const AppRouterProviders = [
    provideRouter(routes),
];

