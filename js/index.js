function showSchedule(className) {

  document.querySelectorAll(".class-schedule").forEach((schedule) => {
    schedule.classList.remove("active");
  });

  document.getElementById(className).classList.add("active");

  document.querySelectorAll(".class-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");
}
