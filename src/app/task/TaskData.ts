import {TaskEventData} from './TaskEventData';

export class TaskModel{
    TaskName: string;
    Description: string;
    EventList: TaskEventData[];
    Display: boolean;
}