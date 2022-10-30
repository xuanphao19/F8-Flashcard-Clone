function App(selector) {
  var $ = document.querySelector(selector);
  let moduleElement = $.querySelector(".Modal_Courses");
  let CoursesMenu = $.querySelector(".header_left");

  (() => {
    CoursesMenu.addEventListener("click", () => {
      moduleElement.removeEventListener("animationend", listenerClose);
      if (moduleElement) {
        moduleElement.style.display = "block";
      }
      var displayAfter = window.getComputedStyle(homeHeader, ":after").getPropertyValue("display");
      if (displayAfter === "block") {
        homeHeader.style.setProperty("--dpn", "none");
      }
    });
  })();

  let CoursesClose = moduleElement.querySelector(".Courses_close");
  CoursesClose.addEventListener("click", () => {
    eleWait.style.setProperty("--dpn", "none");
    closeModule(moduleElement);
  });

  function listenerClose() {
    this.style.animation = "";
    this.style.display = "none";
  }
  function closeModule(element) {
    element.style.animation = "fadeOut 0.8s";
    element.addEventListener("animationend", listenerClose);
  }
  let coursesCourseItem = $.querySelector(".courses");
  let homeCourseName = $.querySelector(".Home_course-name");
  let eleWait = $.querySelector("#JavaScript_Pro");
  let CoursesId;
  (function coursesItem() {
    coursesCourseItem.addEventListener("click", function (e) {
      const tgt = e.target;
      if (tgt.closest(".Courses_course-name")) {
        CoursesId = tgt.closest(".Courses_course-name").id;
        let displayBefore;
        if (CoursesId === "JavaScript_Pro" || CoursesId === "ReactJS_Pro") {
          eleWait.style.setProperty("--dpn", "block");
          displayBefore = window.getComputedStyle(eleWait, ":before").getPropertyValue("display");
        } else {
          eleWait.style.setProperty("--dpn", "none");
          homeCourseName.textContent = tgt.textContent;
          closeModule(moduleElement);
        }
      }
    });
    moduleElement.removeEventListener("animationend", listenerClose);
  })();

  // Click nút luyện tập
  let homePractice = $.querySelector(".Home_practice");
  let homeHeader = $.querySelector(".Home_header");
  homePractice.addEventListener("click", function () {
    if (CoursesId === undefined) {
      homeHeader.style.setProperty("--dpn", "block");
    }
  });

  let headerRight = $.querySelector(".header_right");
  let profileClose = $.querySelector(".Profile_close");
  let modalProfile = $.querySelector(".Modal_Profile");
  let backHome = $.querySelector(".backHome");
  headerRight.addEventListener("click", () => {
    modalProfile.removeEventListener("animationend", listenerClose);
    modalProfile.style.display = "block";
  });
  profileClose.addEventListener("click", () => {
    closeModule(modalProfile);
  });
  backHome.addEventListener("click", () => {
    closeModule(modalProfile);
  });
}
