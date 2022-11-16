var $ = document.querySelector(".App");
let moduleElement = $.querySelector(".Modal_Courses");
let CoursesMenu = $.querySelector(".header_left");
let HomeWrapper = $.querySelector(".Home_wrapper");
let flipCardInner = $.querySelector(".flip-card-inner");
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
coursesCourseItem.addEventListener("click", function (e) {
  const tag = e.target;
  if (tag.closest(".Courses_course-name")) {
    CoursesId = tag.closest(".Courses_course-name").id;
    let displayBefore;
    if (CoursesId === "JavaScript_Pro" || CoursesId === "ReactJS_Pro") {
      displayBefore = getComputedStyle(eleWait, ":before").getPropertyValue("display");
      if (displayBefore === "none") {
        eleWait.style.setProperty("--dpn", "block");
      }
    } else {
      eleWait.style.setProperty("--dpn", "none");
      homeCourseName.textContent = tag.textContent;
      if (!$.querySelector(".TrackItem_wrapper")) {
        HTML_CSS.Start();
        // CreateCourses(HTML_CSS, TrackListContent);
      }
      closeModule(moduleElement);
    }
  }
});
moduleElement.removeEventListener("animationend", listenerClose);
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
    HomeWrapper.style.display = "none";
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
let profileCloseBtn = $.querySelector(".Profile_close");
let modalProfile = $.querySelector(".Modal_Profile");
let TrackListCloseBtn = $.querySelector(".TrackList_close");
let backHome = $.querySelector(".backHome");
headerRight.addEventListener("click", () => {
  modalProfile.removeEventListener("animationend", listenerClose);
  modalProfile.style.display = "block";
});
profileCloseBtn.addEventListener("click", () => {
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
TrackListCloseBtn.addEventListener("click", () => {
  listClose();
  unCheckedAll();
});
let imagePathNoCheck;
let QuestionList = [];
var TrackListContent = $.querySelector(".TrackList_content");
var trackItemWrapper = [];
let itemsLength = 0;
let j = 0;
TrackListContent.onclick = function (e) {
  let tag = e.target;
  let element;
  if (tag.matches(".unDisable")) {
    element = tag;
  } else {
    element = getParent(tag, ".unDisable");
  }
  if (element && element.matches(".unDisable")) {
    trackItemRight = element.querySelector(".TrackItem_right");
    trackItemRightImg = trackItemRight.querySelector(".unChecked");
    if (element.matches(".TrackItem_wrapper-active")) {
      element.classList.remove("TrackItem_wrapper-active");
      trackItemRight.innerHTML = `<img class="unChecked" src="${imagePathNoCheck}" alt="">`;
      j--;
    } else {
      if (trackItemRightImg) {
        element.classList.add("TrackItem_wrapper-active");
        trackItemRight.innerHTML = `<img class="onChecked" src="${imagePathOnCheck}" alt="">`;
        j++;
      } else {
        element.classList.remove("TrackItem_wrapper-active");
        trackItemRight.innerHTML = `<img class="unChecked" src="${imagePathNoCheck}" alt="">`;
        j--;
      }
    }
    if (j === itemsLength) {
      trackListActiveImg.src = `${ActiveImgCheckAll}`;
      return;
    }
    if (j > 0) {
      trackListActiveImg.src = `${ActiveImgChecked}`;
      btnStart.classList.add("start");
      return;
    } else {
      trackListActiveImg.src = `${ActiveImgNoCheck}`;
      btnStart.classList.remove("start");
    }
  }
};
let trackItemWrap;
let unChecked;
let trackItemRight;
let trackItemRightImg;
let btnStart = $.querySelector(".btnStart");
let TrackListActive = $.querySelector(".TrackList_active");
let imagePathOnCheck =
  "https://flash.fullstack.edu.vn/static/media/check-circle-active.e0bde04629ea3769dc5ec55ff0eb7133.svg";
let trackListActiveImg = $.querySelector(".TrackList_active_img");
let ActiveImgCheckAll = "https://flash.fullstack.edu.vn/static/media/check-active.17895e54ca81231df26fd7778a233d55.svg";
let ActiveImgChecked = "https://flash.fullstack.edu.vn/static/media/circle-minus.c9b2a1277bc0ef89e2441ae6b5c560d1.svg";
let ActiveImgNoCheck =
  "https://flash.fullstack.edu.vn/static/media/circle-inactive.4e02a026ecf660280d2f73ca098900f6.svg";

function getParent(element, selector) {
  while (element.parentElement) {
    if (element.parentElement.matches(selector)) {
      return element.parentElement;
    }
    element = element.parentElement;
  }
}
function onCheckedAll() {
  trackListActiveImg.src = `${ActiveImgCheckAll}`;
  Array.from(QuestionList).forEach((unDisable) => {
    unDisable.classList.add("TrackItem_wrapper-active");
    let onCheck = unDisable.querySelector(".TrackItem_right");
    onCheck.innerHTML = `<img class="unChecked" src="${imagePathOnCheck}" alt="">`;
    j = itemsLength;
  });
}
function unCheckedAll() {
  trackListActiveImg.src = `${ActiveImgNoCheck}`;
  answerBtn.textContent = "Trả lời";
  answerBtn.classList.remove("failureAnswer");
  Array.from(QuestionList).forEach((unDisable) => {
    unDisable.classList.remove("TrackItem_wrapper-active");
    let unCheckAll = unDisable.querySelector(".TrackItem_right");
    unCheckAll.innerHTML = `<img class="unChecked" src="${imagePathNoCheck}" alt="">`;
    j = 0;
  });
  introVideo.style.display = "none";
  stars = ["⭐"];
}
TrackListActive.onclick = () => {
  if (!(j === itemsLength)) {
    btnStart.classList.add("start");
    onCheckedAll();
  } else {
    btnStart.classList.remove("start");
    unCheckedAll();
  }
};
let TrackListMakeAll = $.querySelector(".TrackList_make-all");
TrackListMakeAll.onclick = function () {
  if (!(j === itemsLength)) {
    btnStart.classList.add("start");
    onCheckedAll();
  } else {
    btnStart.classList.remove("start");
    unCheckedAll();
  }
};
let calendarClose = $.querySelector("#calendar");
btnStart.onclick = function () {
  let onCheckId = [];
  Array.from(QuestionList).forEach((onCheck) => {
    if (onCheck.matches(".TrackItem_wrapper-active")) {
      onCheckId.push(onCheck.id);
    }
  });
  if (btnStart.matches(".start")) {
    setListQuestion(onCheckId, HTML_CSS);
    HomeWrapper.style.display = "flex";
    homeHeader.style.display = "none";
    calendarClose.style.display = "none";
  }
  stars = [];
  let starsEle = $.querySelector(".stars");
  starsEle.innerHTML = `⭐⭐⭐`;
};
let listQuestion = [];
let lengthQ;
function setListQuestion(listId, Obj) {
  Obj.info.map((item) => {
    for (let id of listId) {
      if (item.id === id && !(item.info === [])) {
        listQuestion = [...listQuestion, ...item.info];
      }
    }
  });
  createQuestionUI(listQuestion);
}

function createQuestionUI(listQuestion) {
  lengthQ = listQuestion.length;
  createRandomQuestion(lengthQ, listQuestion);
  answerBtn.textContent = "Trả lời";
  answerBtn.classList.remove("failureAnswer");
  answerBtn.classList.remove("answerCheck");
  listClose();
  return lengthQ, listQuestion;
}
let randomNum = [];
let RandomQuestion;
function createRandomQuestion(length, listQues) {
  if (length > 0) {
    let n = Math.floor(Math.random() * length);
    let check = randomNum.includes(n);
    if (!check) {
      randomNum.push(n);
    } else {
      while (check) {
        n = Math.floor(Math.random() * length);
        check = randomNum.includes(n);
        if (!check) {
          randomNum.push(n);
        }
      }
    }
    if (randomNum.length === length) {
      randomNum = [];
    }
    RandomQuestion = listQues[n];
  } else {
    return undefined;
  }
  if (RandomQuestion) {
    RandomQuestionInfo = RandomQuestion.Question;
    renderUiQuestion(RandomQuestion, RandomQuestionInfo);
  }
  return RandomQuestion;
}

let homeContentContinue = $.querySelector(".Home_content-continue");
let HomeQuestion = $.querySelector(".HomeQuestionScroll");
let contentAnswer = $.querySelector(".contentAnswer");
let QuestionInfo = $.querySelector(".QuestionInfo");
let RandomQuestionInfo;
let QuestionHint = $.querySelector(".Question_hint");
let suggestionsBack = $.querySelector(".suggestionsBack");
let correctAnswerLength = 0;
let suggestionsBefore = "";
let stars = [];
function renderUiQuestion(RandomQ, RandomQuestionInfo) {
  suggestionsBefore = RandomQ.suggestions;
  if (RandomQuestionInfo !== "") {
    contentAnswer.innerHTML = `<span class="stars">${stars.join("")}</span>`;
    QuestionInfo.innerHTML = RandomQ.Question;
    QuestionHint.innerHTML = RandomQ.Requirements;
    QuestionInfo.style.textAlign = "left";
    QuestionInfo.style.fontSize = "1.2rem";
  } else {
    QuestionInfo.innerHTML = "Hệ thống câu hỏi đang được cập nhật.<br>\
    Cảm ơn sự đồng hành của bạn!";
    QuestionInfo.style.textAlign = "center";
    QuestionInfo.style.fontSize = "1.4rem";
    QuestionHint.innerHTML = "Click Quay lại danh mục câu hỏi!";
    contentAnswer.innerHTML = `<span class="noQuestStar">Click Quay lại danh mục câu hỏi!</span>`;
    let noQuestStar = $.querySelector(".noQuestStar");
    noQuestStar.onclick = () => {
      listQuestion = [];
      FooterWrapper.style.display = "block";
      modalTrackList.style.display = "block";
      TrackListHeaderWrapper.style.display = "block";
      HomeWrapper.style.display = "none";
    };
  }
  suggestionsBack.innerHTML = suggestionsBefore;
  let randomOrder = Math.floor(Math.random() * 23);
  redrawCanvas(randomOrder, pathImg);
  homeContentContinue.style.display = "none";
  HomeQuestion.style.display = "block";
  let correctAnswerArr = RandomQ.correctAnswer;
  if (!(correctAnswerArr === [])) {
    const correctAnswer = correctAnswerArr.map((correctAn, i) => {
      if (!(correctAn === "")) {
        let answerAns = document.createElement("div");
        answerAns.classList = `answerPlanInfo`;
        answerAns.innerHTML = `<div class="answerPlan correctAnswer" id = "correctAnswer${i}">
                                    ${correctAn}
                                    </div>`;
        return answerAns;
      }
    });
    contentAnswer.lastChild.after(...correctAnswer);
  }
  if (!(RandomQ.answerPlan === [])) {
    const answerPl = RandomQ.answerPlan.map((answer, i) => {
      if (!(answer === "")) {
        let answerEle = document.createElement("div");
        answerEle.classList = `answerPlanInfo`;
        answerEle.innerHTML = `<div class="answerPlan" id = "answerPlan${i}">
                                    ${answer}
                               </div>`;
        return answerEle;
      }
    });
    contentAnswer.lastChild.after(...answerPl);
  }
  correctAnswerLength = contentAnswer.querySelectorAll(".correctAnswer").length;
  if (!RandomQ.Requirements.includes("MultipleAnswers")) {
    let randomAnswer = contentAnswer.querySelectorAll(".answerPlanInfo");
    Array.from(randomAnswer).forEach((element) => {
      let OrderFlex = Math.floor(Math.random() * 22);
      element.style.order = `${OrderFlex}`;
    });
  }
}
function redrawCanvas(OrderImg, pathImg) {
  let scream = $.querySelector("#scream");
  scream.src = `./assets/img/${pathImg[OrderImg]}`;
}
let answerBtn = $.querySelector(".answerBtn");
let suggestionsBtn = $.querySelector("#suggestions_btn");
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
  let AnswerAll = contentAnswer.querySelectorAll(".answerPlanInfo");
  let EleTarget = e.target;
  answerBtn.style = "";
  answerBtn.textContent = "Trả Lời";
  answerBtn.classList.remove("require");
  answerBtn.classList.remove("failureAnswer");
  if (EleTarget.matches(".answerPlanInfo")) {
    if (!EleTarget.matches(".answerPlanActive")) {
      EleTarget.classList.add("answerPlanActive");
      y++;
    } else {
      EleTarget.classList.remove("answerPlanActive");
      y--;
    }
  } else {
    let targetParentElement = getParent(EleTarget, ".answerPlanInfo");
    if (targetParentElement) {
      if (!targetParentElement.matches(".answerPlanActive")) {
        targetParentElement.classList.add("answerPlanActive");
        y++;
      } else {
        targetParentElement.classList.remove("answerPlanActive");
        y--;
      }
    }
  }
  if (y === 0) {
    answerBtn.classList.remove("answerCheck");
  } else {
    answerBtn.classList.add("answerCheck");
  }
  Array.from(AnswerAll).forEach((element) => {
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
    Array.from(selectorAnswerAll).forEach((answerSelector) => {
      if (answerSelector.querySelector(".answerPlan").matches(".correctAnswer")) {
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
  if (answerBtn.matches(".answerCheck")) {
    testAnswer(contentAnswer);
    if (flipCardInner.matches(".is-flipped")) {
      flipCardInner.classList.remove("is-flipped");
    }
    let starEle = $.querySelector(".stars");
    if (answerTrue === true) {
      answerBtn.classList.remove("answerCheck");
      answerBtn.textContent = "❤️ 🥇 😍";
      stars.push("⭐");
      explain.innerHTML = `Chính xác! ${suggestionsBefore} <span>Tiếp tục!</span>`;
      explain.style.display = "block";
      answerBtn.classList.remove("failureAnswer");
      answerBtn.style.animation = "loading04 1.3s infinite linear";
      answerBtn.style.background = " #c0feaa";
      starEle.textContent = `${stars.join("")}`;
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
        answerBtn.textContent = "💥 😡 💥";
        answerBtn.classList.add("failureAnswer");
        stars.pop();
        starEle.textContent = `${stars}`;
        audioItem.src = "./assets/audio/Oh_no.mp3";
        audioItem.play();
      }
      Array.from(selectorAnswerAll).forEach((element) => {
        element.classList.add("failureAnswer");
        element.classList.remove("answerPlanActive");
      });
      y = 0;
    }
  }
};
explain.addEventListener("click", function () {
  explain.style.display = "none";
  answerBtn.textContent = "Trả lời";
  answerBtn.classList.remove("failureAnswer", "answerCheck");
  answerBtn.style = { animation: "", background: "" };
  createRandomQuestion(lengthQ, listQuestion);
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
  stars = ["⭐"];
  explain.style.display = "none";
  contentAnswer.innerHTML = `<span class="stars">${stars.join("")}</span>`;
};
