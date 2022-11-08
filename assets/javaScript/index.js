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
    if (flipCardInner.matches(".is-flipped")) {
      flipCardInner.classList.remove("is-flipped");
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
                                <span class="sumQuestion">${item.ArrLength}</span>
                              </div>
                            </div>
                            <div class="TrackItem_right"CreateCourses>
                              <div class="unChecked"></div>
                            </div>`;
      return chapter;
    });
    TrackListContent.lastChild.after(...items);
    callback();
  }

  let unChecked;
  let unDisableAll;
  let trackItemWrapper;
  let TrackListActive = $.querySelector(".TrackList_active");
  let j = 0;
  function trackItem() {
    trackItemWrapper = $.querySelectorAll(".TrackItem_wrapper");
    trackItemWrapper.forEach((iterator) => {
      let disableQuest = iterator.querySelector(".sumQuestion").textContent;
      if (disableQuest == 0) {
        iterator.classList.add("TrackItem_disable");
      } else {
        iterator.classList.add("unDisable");
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
    });
    unDisableAll = $.querySelectorAll(".unDisable");
    itemsLength = unDisableAll.length;
  }

  function onCheckedAll() {
    TrackListActive.classList.add("TrackList_activeAll");
    for (const unDisable of unDisableAll) {
      let onCheck = unDisable.querySelector(".unChecked");
      unDisable.classList.add("TrackItem_wrapper-active");
      onCheck.classList.add("onChecked");
      j = itemsLength;
    }
  }
  function unCheckedAll() {
    TrackListActive.classList.remove("TrackList_activeAll");
    TrackListActive.classList.remove("TrackList_Checked");
    answerBtn.textContent = "Trả lời";
    answerBtn.classList.remove("failureAnswer");
    for (const unDisable of unDisableAll) {
      let unCheckAll = unDisable.querySelector(".unChecked");
      unDisable.classList.remove("TrackItem_wrapper-active");
      unCheckAll.classList.remove("onChecked");
      j = 0;
    }
    introVideo.style.display = "none";
    stars = ["⭐"];
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
  let calendarClose = $.querySelector("#calendar");
  btnStart.onclick = function () {
    let onCheckId = [];
    for (const onCheck of trackItemWrapper) {
      if (onCheck.matches(".TrackItem_wrapper-active")) {
        onCheckId.push(onCheck.id);
      }
    }
    if (btnStart.matches(".start")) {
      createQuestionUI(onCheckId, HTML_CSS);
      homeHeader.style.display = "none";
      calendarClose.style.display = "none";
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
    answerBtn.textContent = "Trả lời";
    answerBtn.classList.remove("failureAnswer");
    answerBtn.classList.remove("answerCheck");
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
  let HomeQuestion = $.querySelector(".HomeQuestionScroll");
  let stopHere = $.querySelector("#stopHere");
  let contentAnswer = $.querySelector(".contentAnswer");
  let QuestionInfo = $.querySelector(".QuestionInfo");
  let QuestionHint = $.querySelector(".Question_hint");
  let suggestionsBack = $.querySelector(".suggestionsBack");
  let correctAnswerLength = 0;
  let suggestionsBefore = "";
  let stars = ["⭐"];
  function renderUiQuestion(RandomQ) {
    QuestionInfo.innerHTML = RandomQ.Question;
    QuestionHint.innerHTML = RandomQ.Requirements;
    suggestionsBefore = RandomQ.suggestions;
    suggestionsBack.innerHTML = suggestionsBefore;
    contentAnswer.innerHTML = `<span class="stars">${stars}</span>`;
    let randomOrder = Math.floor(Math.random() * 23);
    homeContentContinue.style.display = "none";
    HomeQuestion.style.display = "block";
    let correctAnswerArr = RandomQ.correctAnswer;
    if (!(correctAnswerArr === [])) {
      const correctAnswer = correctAnswerArr.map((correctAn, i) => {
        let answerAns = document.createElement("div");
        answerAns.classList = `answerPlanInfo`;
        answerAns.innerHTML = `<div class="answerPlan correctAnswer" id = "correctAnswer${i}">
                                    ${correctAn}
                               </div>`;
        return answerAns;
      });
      contentAnswer.lastChild.after(...correctAnswer);
    }
    correctAnswerLength = contentAnswer.querySelectorAll(".correctAnswer").length;
    if (!(RandomQ.answerPlan === [])) {
      const answerPl = RandomQ.answerPlan.map((answer, i) => {
        let answerEle = document.createElement("div");
        answerEle.classList = `answerPlanInfo`;
        answerEle.innerHTML = `<div class="answerPlan" id = "answerPlan${i}">
                                    ${answer}
                               </div>`;
        return answerEle;
      });
      contentAnswer.lastChild.after(...answerPl);
    }
    if (!RandomQ.Requirements.includes("MultipleAnswers")) {
      let randomAnswer = contentAnswer.querySelectorAll(".answerPlanInfo");
      randomAnswer.forEach((element) => {
        let OrderFlex = Math.floor(Math.random() * 7);
        element.style.order = `${OrderFlex}`;
      });
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
    if (answerBtn.matches(".answerCheck")) {
      answerBtn.classList.remove("answerCheck");
    }
    HomeQuestion.style.display = "none";
    homeContentContinue.style.display = "block";
    unCheckedAll();
  }
  let y = 0;
  contentAnswer.addEventListener("click", function (e) {
    let AnswerAll = contentAnswer.querySelectorAll(".answerPlan");
    let EleTarget = e.target;
    answerBtn.style = "";
    answerBtn.textContent = "Trả Lời";
    answerBtn.classList.remove("require");
    answerBtn.classList.remove("failureAnswer");
    explain.style.display = "none";
    if (EleTarget.closest(".answerPlan")) {
      if (EleTarget.nodeName === "CODE") {
        let targetParentElement = EleTarget.parentElement;
        if (!targetParentElement.matches(".answerPlanActive")) {
          targetParentElement.classList.add("answerPlanActive");
          y++;
        } else {
          targetParentElement.classList.remove("answerPlanActive");
          y--;
        }
      } else {
        if (!EleTarget.matches(".answerPlanActive")) {
          EleTarget.classList.add("answerPlanActive");
          y++;
        } else {
          EleTarget.classList.remove("answerPlanActive");
          y--;
        }
      }
      if (y === 0) {
        answerBtn.classList.remove("answerCheck");
      } else {
        answerBtn.classList.add("answerCheck");
      }
    }
    AnswerAll.forEach((element) => {
      element.classList.remove("failureAnswer");
    });
  });

  let answerTrue = false;
  let selectorAnswerAll;
  let answerSelectorLength = 0;
  function testAnswer(contentAnswer) {
    selectorAnswerAll = contentAnswer.querySelectorAll(".answerPlanActive");
    answerSelectorLength = selectorAnswerAll.length;
    if (selectorAnswerAll) {
      let answerValue;
      selectorAnswerAll.forEach((answerSelector) => {
        if (answerSelector.matches(".correctAnswer")) {
          answerValue = true;
        }
      });
      if (answerValue === true && answerSelectorLength === correctAnswerLength) {
        answerTrue = true;
      } else {
        answerTrue = false;
      }
    }
  }
  let explain = $.querySelector(".explain");
  answerBtn.onclick = function () {
    testAnswer(contentAnswer);
    if (flipCardInner.matches(".is-flipped")) {
      flipCardInner.classList.remove("is-flipped");
    }
    if (answerTrue === true) {
      answerBtn.textContent = "❤️ 🥇 😍";
      explain.innerHTML = `Chính xác! ${suggestionsBefore} <br> <span>Close!</span>`;
      explain.style.display = "block";
      answerBtn.classList.remove("failureAnswer");
      answerBtn.style.animation = "loading04 1.3s infinite linear";
      answerBtn.style.background = " #c0feaa";
      stars.push("⭐");
      createRandomQuestion(lengthQ, listQuestion, suggestionsBack);
      let congratulation = $.querySelector("#congratulation");
      switch (stars.length) {
        case 10:
        case 20:
        case 30:
        case 40:
        case 50:
        case 60:
        case 70:
        case 80:
        case 90:
        case 100:
          audioItem.src = "./assets/audio/Tieng-yeah.mp3";
          audioItem.play();
          congratulation.play();
          break;
        default:
          audioItem.src = "./assets/audio/yeah.mp3";
          audioItem.play();
          break;
      }
    } else {
      let starEle = $.querySelector(".stars");
      if (y === 0) {
        if (answerBtn.matches(".require")) {
          answerBtn.classList.remove("require");
        } else {
          answerBtn.classList.add("require");
          explain.style.display = "none";
          audioItem.src = "./assets/audio/Am-thanh-oh-nooo.mp3";
          audioItem.play();
        }
      } else {
        explain.style.display = "none";
        answerBtn.textContent = "💥😡💥";
        answerBtn.classList.add("failureAnswer");
        stars.pop();
        starEle.textContent = `${stars}`;
        if (audioItem.src !== "./assets/audio/Oh_no.mp3") {
          audioItem.src = "./assets/audio/Oh_no.mp3";
          audioItem.play();
        } else {
          audioItem.play();
        }
      }
      selectorAnswerAll.forEach((element) => {
        element.classList.add("failureAnswer");
        element.classList.remove("answerPlanActive");
      });
      y = 0;
    }
  };
  explain.addEventListener("click", function () {
    explain.style.display = "none";
    answerBtn.textContent = "Trả lời";
    answerBtn.classList.remove("failureAnswer", "answerCheck");
    answerBtn.style = { animation: "", background: "" };
  });
  suggestionsBtn.onclick = function () {
    flipCardInner.classList.toggle("is-flipped");
    introVideo.style.display = "none";
    explain.style.display = "none";
  };

  let audioItem = $.querySelector(".audioItem");
  let watchVideo_btn = $.querySelector("#watchVideo_btn");
  let introVideo = $.querySelector(".introVideo");
  watchVideo_btn.onclick = function () {
    introVideo.style.display = "block";
    introVideo.innerHTML = `<iframe
    id="introVideo"
      width="320"
      height="180"
      src="https://www.youtube.com/embed/DpvYHLUiZpc?start=01&loop=1&html5=1"
      title="Phương pháp HỌC LẬP TRÌNH của Sơn Đặng! | Lộ trình học lập trình | Phương pháp học lập trình"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      ></iframe>`;
    flipCardInner.classList.add("is-flipped");
    homeContentContinue.style.display = "block";
    HomeQuestion.style.display = "none";
    homeHeader.style.display = "flex";
    calendarClose.style.display = "block";
    suggestionsBack.textContent = "";
    answerBtn.style = "";
  };
}
