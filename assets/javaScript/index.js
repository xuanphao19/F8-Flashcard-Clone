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
      if (trackItemWrapper) {
        stopPracticing();
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
          unCheckedAll();
        }
      }
    });
    moduleElement.removeEventListener("animationend", listenerClose);
  })();

  // Click nút luyện tập
  var HTML_CSS = new FollowCourses("HTML_CSS_Pro", "Khóa HTML CSS Pro", "Courses_item", "", 10, HTML_CSS_InFor);
  let homePractice = $.querySelector(".Home_practice");
  let homeHeader = $.querySelector(".Home_header");
  let TrackListHeaderWrapper = $.querySelector(".TrackList_header-wrapper");
  let FooterWrapper = $.querySelector(".Footer_wrapper");
  homePractice.addEventListener("click", function () {
    listQuestion = [];
    lengthQ = 0;
    let presentId = HTML_CSS.id;
    if (CoursesId === presentId) {
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
    TrackListActive.classList.remove("TrackList_Checked");
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
    if (btnStart.matches(".start")) {
      createQuestionUI(onCheckId, HTML_CSS);
    }
  };

  let listQuestion = [];
  let lengthQ;
  function createQuestionUI(listId, Obj) {
    Obj.info.map((item) => {
      for (let id of listId) {
        if (item.id === id) {
          listQuestion = [...listQuestion, ...item.info];
        }
      }
    });
    lengthQ = listQuestion.length;
    createRandomQuestion(lengthQ, listQuestion);
    listClose();
    return lengthQ, listQuestion;
  }

  let randomNo = [];
  let RandomQuestion;
  function createRandomQuestion(length, listQues) {
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
      RandomQuestion = listQues[n];
    } else {
      return undefined;
    }
    renderUiQuestion(RandomQuestion);
    return RandomQuestion;
  }

  let homeContentContinue = $.querySelector(".Home_content-continue");
  let HomeQuestion = $.querySelector(".HomeQuestion");
  let stopHere = $.querySelector("#stopHere");
  let contentAnswer = $.querySelector(".contentAnswer");
  let QuestionInfo = $.querySelector(".QuestionInfo");
  let QuestionHint = $.querySelector(".Question_hint");
  let suggestionsBack = $.querySelector(".suggestionsBack");
  let stars = ["⭐"];
  function renderUiQuestion(RandomQ) {
    QuestionInfo.innerHTML = RandomQ.Question;
    QuestionHint.innerHTML = RandomQ.Requirements;
    suggestionsBack.innerHTML = RandomQ.suggestions;
    contentAnswer.innerHTML = `<span class="stars">${stars}</span>`;
    let randomOrder = Math.floor(Math.random() * 23);
    let OrderFlex = randomOrder % 3;
    homeContentContinue.style.display = "none";
    HomeQuestion.style.display = "block";
    const answers = RandomQ.answerPlan.map((answer, i) => {
      let answerEle = document.createElement("div");
      answerEle.classList = `answerPlan`;
      answerEle.id = `answerPlan${i}`;
      answerEle.innerHTML = answer;
      return answerEle;
    });
    contentAnswer.lastChild.after(...answers);
    let answerPlanId0 = contentAnswer.querySelector("#answerPlan0");
    if (OrderFlex >= 2) {
      answerPlanId0.style.order = `${OrderFlex + 1}`;
    } else {
      answerPlanId0.style.order = `${OrderFlex}`;
    }
    redrawCanvas(randomOrder, pathImg);
  }
  function redrawCanvas(OrderImg, pathImg) {
    let scream = $.querySelector("#scream");
    scream.src = `./assets/img/${pathImg[OrderImg]}`;
  }

  let answerBtn = $.querySelector(".answerBtn");
  let suggestionsBtn = $.querySelector("#suggestions_btn");
  let flipCardInner = $.querySelector(".flip-card-inner");

  function stopPracticing() {
    if (flipCardInner.matches(".is-flipped")) {
      flipCardInner.classList.remove("is-flipped");
    }
    if (answerBtn.matches(".answerBtn")) {
      answerBtn.classList.remove("answerCheck");
    }
    HomeQuestion.style.display = "none";
    homeContentContinue.style.display = "block";
    unCheckedAll();
  }
  let No = 0;
  let clickError;
  contentAnswer.addEventListener("click", function (e) {
    let EleTarget = e.target;
    if (EleTarget.closest(".answerPlan")) {
      EleTarget.classList.toggle("answerPlanActive");
      if (EleTarget.id === "answerPlan0") {
        clickError = true;
      } else {
        clickError = false;
      }
      if (EleTarget.matches(".answerPlanActive")) {
        No++;
      } else {
        No--;
      }
    }
    if (No !== 0) {
      answerBtn.classList.add("answerCheck");
    } else if (answerBtn.matches(".answerCheck")) {
      answerBtn.classList.remove("answerCheck");
    }
  });

  answerBtn.onclick = function () {
    stars.push("⭐");
    if (flipCardInner.matches(".is-flipped")) {
      flipCardInner.classList.remove("is-flipped");
    }
    if (answerBtn.matches(".answerCheck")) {
      answerBtn.classList.remove("answerCheck");
    }
    createRandomQuestion(lengthQ, listQuestion, suggestionsBack);
    No = 0;
  };
  suggestionsBtn.onclick = function () {
    flipCardInner.classList.toggle("is-flipped");
  };
  stopHere.onclick = function () {
    stopPracticing();
  };
}
