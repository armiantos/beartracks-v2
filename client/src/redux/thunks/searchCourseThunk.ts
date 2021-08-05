import { AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit';
import Course, { ComponentType } from '../../data/Course';
import { Day } from '../../data/Event';

export const searchCourse: AsyncThunkPayloadCreator<Course[], string, Record<string, never>> = async (course: string, _thunkAPI) => {
    // TODO: Call server
    const courses: Course[] = [
        {
            code: course,
            courseComponents: [
                {
                    contactName: 'Bob',
                    event: {
                        startTime: {
                            hour: 8,
                        },
                        endTime: {
                            hour: 8,
                            minute: 50,
                        },
                        days: [Day.Monday],
                    },
                    type: ComponentType.Lecture,
                },
            ],
        },
    ];
    return courses;
};

export default createAsyncThunk('courseSearch/searchCourse', searchCourse);
