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
  let modalTrackList = $.querySelector(".Modal_TrackList");

  let CoursesId;
  (function coursesItem() {
    coursesCourseItem.addEventListener("click", function (e) {
      const tgt = e.target;
      if (tgt.closest(".Courses_course-name")) {
        CoursesId = tgt.closest(".Courses_course-name").id;
        let displayBefore;
        if (CoursesId === "JavaScript_Pro" || CoursesId === "ReactJS_Pro") {
          displayBefore = getComputedStyle(eleWait, ":before").getPropertyValue("display");
          if (displayBefore === "none") {
            eleWait.style.setProperty("--dpn", "block");
          }
        } else {
          eleWait.style.setProperty("--dpn", "none");
          homeCourseName.textContent = tgt.textContent;
          if (!$.querySelector(".TrackItem_wrapper")) {
            CreateCourses(HTML_CSS, TrackListContent, trackItem);
          }
          closeModule(moduleElement);
        }
      }
    });
    moduleElement.removeEventListener("animationend", listenerClose);
  })();

  // Click nút luyện tập
  let homePractice = $.querySelector(".Home_practice");
  let homeHeader = $.querySelector(".Home_header");
  let TrackListHeaderWrapper = $.querySelector(".TrackList_header-wrapper");
  let FooterWrapper = $.querySelector(".Footer_wrapper");
  homePractice.addEventListener("click", function () {
    if (CoursesId === "HTML_CSS_Pro") {
      FooterWrapper.style.display = "block";
      modalTrackList.style.display = "block";
      TrackListHeaderWrapper.style.display = "block";
    } else {
      // CoursesMenu.style.animation = "loading04 0.3s infinite linear";
      CoursesMenu.style.setProperty("animation", "loading04 0.3s infinite linear");
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
  function listClose() {
    FooterWrapper.style.display = "none";
    modalTrackList.style.display = "none";
    TrackListHeaderWrapper.style.display = "none";
  }
  let TrackListClose = $.querySelector(".TrackList_close");
  TrackListClose.addEventListener("click", () => {
    listClose();
    unCheckedAll();
  });

  var HTML_CSS = new FollowCourses("HTML_CSS_Pro", "HTML CSS Pro", "Courses_item", "", 10, HTML_CSS_InFor);
  let itemsLength = 0;
  const TrackListContent = $.querySelector(".TrackList_content");
  function CreateCourses(Obj, TrackListContent, callback) {
    const items = Obj.info.map((item, i) => {
      i++;
      let chapter = document.createElement("div");
      chapter.classList = `${item.className}`;
      chapter.id = `${item.id}`;
      chapter.innerHTML = ` <div class="TrackItem_left">
                              <span class="TrackItem_title">${i}. ${item.name}</span>
                              <div class="TrackItem_completed">
                                <span>${item.ArrLength}</span>
                              </div>
                            </div>
                            <div class="TrackItem_right">
                              <div class="unChecked"></div>
                            </div>`;
      return chapter;
    });
    TrackListContent.lastChild.after(...items);
    itemsLength = items.length;
    callback();
  }

  let unChecked;
  let trackItemWrapper;
  let TrackListActive = $.querySelector(".TrackList_active");
  let j = 0;
  function trackItem() {
    trackItemWrapper = $.querySelectorAll(".TrackItem_wrapper");
    for (const iterator of trackItemWrapper) {
      iterator.addEventListener("click", () => {
        const unChecks = $.querySelectorAll(".unChecked");
        unChecked = iterator.querySelector(".unChecked");
        if (unChecked.matches(".onChecked")) {
          unChecked.classList.remove("onChecked");
          iterator.classList.remove("TrackItem_wrapper-active");
          j--;
        } else {
          iterator.classList.add("TrackItem_wrapper-active");
          unChecked.classList.add("onChecked");
          j++;
        }
        if (j === itemsLength) {
          TrackListActive.classList.add("TrackList_activeAll");
        } else {
          TrackListActive.classList.remove("TrackList_activeAll");
        }
        for (const item of unChecks) {
          if (item.matches(".onChecked")) {
            TrackListActive.classList.add("TrackList_Checked");
            btnStart.classList.add("start");
            return;
          } else {
            TrackListActive.classList.remove("TrackList_Checked");
          }
        }
        btnStart.classList.remove("start");
      });
    }
  }
  function onCheckedAll() {
    TrackListActive.classList.add("TrackList_activeAll");
    for (const unCheckAlls of trackItemWrapper) {
      let onCheckAll = unCheckAlls.querySelector(".unChecked");
      unCheckAlls.classList.add("TrackItem_wrapper-active");
      onCheckAll.classList.add("onChecked");
      j = itemsLength;
    }
  }
  function unCheckedAll() {
    TrackListActive.classList.remove("TrackList_activeAll");
    for (const unCheckAlls of trackItemWrapper) {
      let unCheckAll = unCheckAlls.querySelector(".unChecked");
      unCheckAlls.classList.remove("TrackItem_wrapper-active");
      unCheckAll.classList.remove("onChecked");
      j = 0;
    }
  }
  TrackListActive.onclick = () => {
    if (!TrackListActive.matches(".TrackList_activeAll")) {
      btnStart.classList.add("start");
      onCheckedAll();
    } else {
      btnStart.classList.remove("start");
      unCheckedAll();
    }
  };
  let TrackListMakeAll = $.querySelector(".TrackList_make-all");
  TrackListMakeAll.onclick = function () {
    if (!TrackListActive.matches(".TrackList_activeAll")) {
      btnStart.classList.add("start");
      onCheckedAll();
    } else {
      btnStart.classList.remove("start");
      unCheckedAll();
    }
  };
  let btnStart = $.querySelector(".Button_wrapper");
  btnStart.onclick = function () {
    let onCheckId = [];
    for (const onCheck of trackItemWrapper) {
      if (onCheck.matches(".TrackItem_wrapper-active")) {
        onCheckId.push(onCheck.id);
      }
    }
    createQuestionUI(onCheckId, HTML_CSS);
  };
  function createQuestionUI(listId, Obj) {
    let listQuestion = [];
    Obj.info.map((item) => {
      for (let id of listId) {
        if (item.id === id) {
          listQuestion = [...listQuestion, ...item.info];
        }
      }
    });
    let lengthQ = listQuestion.length;
    createRandomQuestion(lengthQ, listQuestion);
  }

  let randomNo = [];
  function createRandomQuestion(length, listQues) {
    let RandomQuestion;
    if (length > 0) {
      let n = Math.floor(Math.random() * length);
      let check = randomNo.includes(n);
      if (!check) {
        randomNo.push(n);
      } else {
        while (check) {
          n = Math.floor(Math.random() * length);
          check = randomNo.includes(n);
          if (!check) {
            randomNo.push(n);
          }
        }
      }
      if (randomNo.length === length) {
        randomNo = [];
      }
      RandomQuestion = `${listQues[n]}`;
      console.log(RandomQuestion);
    } else {
      return undefined;
    }
    console.log(listQues);
    renderUiQuestion(RandomQuestion);
  }
  let homeContentContinue = $.querySelector(".Home_content-continue");
  let HomeQuestion = $.querySelector(".HomeQuestion");
  let stopHere = $.querySelector("#stopHere");
  function renderUiQuestion(RandomQ) {
    listClose();
    homeContentContinue.style.display = "none";
    HomeQuestion.style.display = "block";
  }
  stopHere.onclick = function () {
    HomeQuestion.style.display = "none";
    homeContentContinue.style.display = "block";
  };
  let suggestionsBtn = $.querySelector("#suggestions_btn");
  let flipCardInner = $.querySelector(".flip-card-inner");
  suggestionsBtn.onclick = function () {
    flipCardInner.classList.toggle("is-flipped");
  };
}
