export const lessons = [
  { number: 1, start: "08:05", end: "08:50" },
  { number: 2, start: "08:50", end: "09:35" },
  { number: 3, start: "09:55", end: "10:40" },
  { number: 4, start: "10:40", end: "11:25" },
  { number: 5, start: "11:45", end: "12:30" },
  { number: 6, start: "12:30", end: "13:15" },
  { number: 7, start: "13:30", end: "14:15" },
  { number: 8, start: "14:15", end: "15:00" },
  { number: 9, start: "15:00", end: "15:45" },
  { number: 10, start: "15:45", end: "16:30" },
] as const;

export const breaks = [
  { after: 2, start: "09:35", end: "09:55" },
  { after: 4, start: "11:25", end: "11:45" },
  { after: 6, start: "13:15", end: "13:30" },
] as const;

export const bookingSlots = lessons.flatMap(lesson => {
  const pause = breaks.find(p => p.after === lesson.number);
  const slots = [{ ...lesson, label: `${lesson.number}. Stunde`, isBreak: false }];
  return pause
    ? [...slots, { number: 0, start: pause.start, end: pause.end,
        label: `${breaks.indexOf(pause) + 1}. Pause`, isBreak: true }]
    : slots;
});

export function consecutiveEndIndices(startIndex: number) {
  if (!Number.isInteger(startIndex) || startIndex < 0 || startIndex >= bookingSlots.length) return [];
  return Array.from({ length: bookingSlots.length - startIndex }, (_, i) => startIndex + i);
}
