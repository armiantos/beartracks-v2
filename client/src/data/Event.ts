export enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
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
