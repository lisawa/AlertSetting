import { RouterConfig} from '@angular/router';
import {ActionComponent} from './action.component';
import {LineSettingComponent} from './line-setting/line-setting.component';
import {WeChatSettingComponent} from './we-chat-setting/we-chat-setting.component';
import {MailSettingComponent} from './mail-setting/mail-setting.component';
import {OptionSettingComponent} from './option-setting/option-setting.component';

export const ActionRoutes: RouterConfig = [
    {
        path: 'Action',
        component: ActionComponent,
        children:[
            {
                path: '',
                redirectTo: 'Option',
                pathMatch: 'full',
            },
            {
                path: 'Line',
                component: LineSettingComponent,
            },
            {
                path: 'WeChat',
                component: WeChatSettingComponent,
            },
            {
                path: 'EMail',
                component: MailSettingComponent,
            },
            {
                path: 'Option',
                component: OptionSettingComponent,
            },
        ],
    },
];