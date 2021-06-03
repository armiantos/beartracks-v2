import Event from './Event';

export enum ComponentType {
    Lecture,
    Lab,
    Seminar,
}

export type CourseComponent = {
    type: ComponentType;
    contactName: string;
    event: Event;
    location?: string;
};

type Course = {
    code: string;
    courseComponents: CourseComponent[];
};

export default Course;
