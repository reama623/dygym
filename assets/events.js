const now = new Date();

export default [
  {
    id: 0,
    title: "김지영",
    allDay: true,
    start: new Date(2021, 11, 13),
    end: new Date(2021, 11, 13),
  },
  {
    id: 1,
    title: "김지영",
    start: new Date(2021, 11, 14),
    end: new Date(2021, 11, 14),
  },

  {
    id: 2,
    title: "김지영",
    start: new Date(2021, 11, 15, 0, 0, 0),
    end: new Date(2021, 11, 15, 0, 0, 0),
  },

  {
    id: 3,
    title: "DTS ENDS",
    start: new Date(2021, 11, 16, 0, 0, 0),
    end: new Date(2021, 11, 16, 0, 0, 0),
  },

  {
    id: 4,
    title: "Some Event",
    start: new Date(2021, 11, 17, 0, 0, 0),
    end: new Date(2021, 11, 17, 0, 0, 0),
  },
  {
    id: 5,
    title: "Conference",
    start: new Date(2021, 11, 18),
    end: new Date(2021, 11, 18),
    desc: "Big conference for important people",
  },
  {
    id: 6,
    title: "Meeting",
    start: new Date(2021, 11, 11, 10, 30, 0, 0),
    end: new Date(2021, 11, 11, 12, 30, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting",
  },
  {
    id: 7,
    title: "Lunch",
    start: new Date(2021, 11, 12, 12, 0, 0, 0),
    end: new Date(2021, 11, 12, 13, 0, 0, 0),
    desc: "Power lunch",
  },
  {
    id: 8,
    title: "Meeting",
    start: new Date(2021, 11, 12, 14, 0, 0, 0),
    end: new Date(2021, 11, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: "Happy Hour",
    start: new Date(2021, 11, 12, 17, 0, 0, 0),
    end: new Date(2021, 11, 12, 17, 30, 0, 0),
    desc: "Most important meal of the day",
  },
  {
    id: 10,
    title: "Dinner",
    start: new Date(2021, 11, 12, 20, 0, 0, 0),
    end: new Date(2021, 11, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: "Planning Meeting with Paige",
    start: new Date(2021, 11, 13, 8, 0, 0),
    end: new Date(2021, 11, 13, 10, 30, 0),
  },
  {
    id: 11.1,
    title: "Inconvenient Conference Call",
    start: new Date(2021, 11, 13, 9, 30, 0),
    end: new Date(2021, 11, 13, 12, 0, 0),
  },
  {
    id: 11.2,
    title: "Project Kickoff - Lou's Shoes",
    start: new Date(2021, 11, 13, 11, 30, 0),
    end: new Date(2021, 11, 13, 14, 0, 0),
  },
  {
    id: 11.3,
    title: "Quote Follow-up - Tea by Tina",
    start: new Date(2021, 11, 13, 15, 30, 0),
    end: new Date(2021, 11, 13, 16, 0, 0),
  },
  {
    id: 12,
    title: "Late Night Event",
    start: new Date(2021, 11, 17, 19, 30, 0),
    end: new Date(2021, 11, 18, 2, 0, 0),
  },
  {
    id: 12.5,
    title: "Late Same Night Event",
    start: new Date(2021, 11, 17, 19, 30, 0),
    end: new Date(2021, 11, 17, 23, 30, 0),
  },
  {
    id: 13,
    title: "Multi-day Event",
    start: new Date(2021, 11, 20, 19, 30, 0),
    end: new Date(2021, 11, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 15,
    title: "Point in Time Event",
    start: now,
    end: now,
  },
  {
    id: 16,
    title: "Video Record",
    start: new Date(2021, 11, 14, 15, 30, 0),
    end: new Date(2021, 11, 14, 19, 0, 0),
  },
  {
    id: 17,
    title: "Dutch Song Producing",
    start: new Date(2021, 11, 14, 16, 30, 0),
    end: new Date(2021, 11, 14, 20, 0, 0),
  },
  {
    id: 18,
    title: "Itaewon Halloween Meeting",
    start: new Date(2021, 11, 14, 16, 30, 0),
    end: new Date(2021, 11, 14, 17, 30, 0),
  },
  {
    id: 19,
    title: "Online Coding Test",
    start: new Date(2021, 11, 14, 17, 30, 0),
    end: new Date(2021, 11, 14, 20, 30, 0),
  },
  {
    id: 20,
    title: "An overlapped Event",
    start: new Date(2021, 11, 14, 17, 0, 0),
    end: new Date(2021, 11, 14, 18, 30, 0),
  },
  {
    id: 21,
    title: "Phone Interview",
    start: new Date(2021, 11, 14, 17, 0, 0),
    end: new Date(2021, 11, 14, 18, 30, 0),
  },
  {
    id: 22,
    title: "Cooking Class",
    start: new Date(2021, 11, 14, 17, 30, 0),
    end: new Date(2021, 11, 14, 19, 0, 0),
  },
  {
    id: 23,
    title: "Go to the gym",
    start: new Date(2021, 11, 14, 18, 30, 0),
    end: new Date(2021, 11, 14, 20, 0, 0),
  },
];