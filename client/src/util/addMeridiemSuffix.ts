function addMeridiemSuffix(hour: number): string {
    return hour / 12 < 1 ? `${hour} AM` : hour === 12 ? `${hour} PM ` : `${hour % 12} PM`;
}

export default addMeridiemSuffix;
