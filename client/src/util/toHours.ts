import { Time } from '../data/Event';

function toHours(time: Time): number {
    return time.hour + (time.minute || 0) / 60;
}

export default toHours;
