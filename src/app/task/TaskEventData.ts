import {TaskCheckData} from './TaskCheckData';

export class TaskEventData{
    EventSID: string;
    EventName: string;
    EventDescription: string;
    CheckGroupList: TaskCheckData[];
}