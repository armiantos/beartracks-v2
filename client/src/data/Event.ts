export enum Day {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
}

export type Time = {
    hour: number;
    minute: number;
};

type Event = {
    startTime: Time;
    endTime: Time;
    days: Day[];
};

export default Event;
