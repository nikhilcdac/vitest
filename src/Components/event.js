const events = [
  { title: "Workout - Cardio", start: getDate("YEAR-MONTH-02") },
  { title: "Workout - Strength Training", start: getDate("YEAR-MONTH-03") },
  {
    title: "Yoga & Meditation",
    start: getDate("YEAR-MONTH-06"),
    backgroundColor: "green"
  },
  { title: "Junk Food Cheat Day", start: getDate("YEAR-MONTH-07") },
  { title: "Morning Run", start: getDate("YEAR-MONTH-08") , end: getDate("YEAR-MONTH-14")},
  {
    title: "Skipped Workout",
    start: getDate("YEAR-MONTH-09"),
    backgroundColor: "yellow",
    textColor: "black"
  },
  {
    title: "Book Reading Challenge",
    start: getDate("YEAR-MONTH-09"),
    backgroundColor: "purple"
  },
  { title: "Evening Walk", start: getDate("YEAR-MONTH-22"), backgroundColor: "red", textColor: "black" },
  { title: "Swimming Session", start: getDate("YEAR-MONTH-28") },
  {
    title: "Weekend Getaway",
    start: getDate("YEAR-MONTH-23"),
    end: getDate("YEAR-MONTH-24"),
    allDay: true
  }
];

function getDate(dayString) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = "0" + month;
  }

  return dayString.replace("YEAR", year).replace("MONTH", month);
}

export default events;
