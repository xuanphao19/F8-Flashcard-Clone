{
  let weekdays = document.querySelectorAll(".week");
  let Dates = document.querySelectorAll(".dates");
  let todayEle = document.querySelector(".todays");
  let today = document.querySelector(".today");
  let dd;
  let setDay;
  let dates = [];
  let days = [];

  for (var i = 0; i > -7; ) {
    // var d = new Date("Oct 05, 1975 17:15:30");
    var d = new Date();
    dd = d.getDate();
    setDay = d.getDay();
    d.setDate(dd + i);
    dates.push(d.getDate());
    var day = d.getDay(d);
    switch (day) {
      case 0:
        days.push("Sun");
        break;
      case 1:
        days.push("Mon");
        break;
      case 2:
        days.push("Tue");
        break;
      case 3:
        days.push("Wed");
        break;
      case 4:
        days.push("Thu");
        break;
      case 5:
        days.push("Fri");
        break;
      case 6:
        days.push("Sat");
    }
    i--;
  }

  today.textContent = `${dd}`;
  for (var weekday of weekdays) {
    weekday.innerHTML = `<span class="weekday">${days.pop()}</span>
                            <span class="dates">${dates.pop()}</span>`;
    if (weekday.textContent.includes("Sun")) {
      weekday.classList.add("sunday");
    } else {
      if (weekday.matches(".sunday")) {
        weekday.classList.remove("sunday");
      }
    }
    if (weekday.textContent.includes("Sat")) {
      weekday.classList.add("saturday");
    } else {
      if (weekday.matches(".saturday")) {
        weekday.classList.remove("saturday");
      }
    }
  }
  if (setDay === 0) {
    todayEle.classList.add("sunday");
  } else if (setDay === 6) {
    todayEle.classList.add("saturday");
  } else {
    if (todayEle.matches(".saturday") || todayEle.matches(".sunday")) {
      todayEle.classList.remove("saturday");
      todayEle.classList.remove("sunday");
    }
  }

  // Cú pháp toán tử 3 ngôi
  let variableName = Unit1 ? "expressionIfTrue" : "expressionIfFalse";
  // condition ? expressionIfTrue : expressionIfFalse;
}
