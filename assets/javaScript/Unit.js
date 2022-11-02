// var unitList = document.querySelector(".Courses_list");
function FollowCourses(id, name, className, image, minReq, info) {
  // if (!new.target) {
  //   throw Error("Cannot be called without the new keyword");
  // }
  // if (!new.target) {
  //   return new FollowCourses(id, name, className, image, minReq, info);
  // }
  this.id = id;
  this.name = name;
  this.className = className;
  this.image = image;
  this.minReq = minReq = 10;
  this.info = info;
  ArrLength = info.length;
  this.arguments = true;
  return {
    id,
    name,
    className,
    image: this.image,
    minReq,
    info,
    ArrLength,
  };
}

var HTML_CSS_Chapter1 = [["A"], ["B"], ["C"]];
var HTML_CSS_Chapter2 = [["D"], ["E"], ["F"]];
var HTML_CSS_Chapter3 = [["G"], ["H"], ["I"]];
var HTML_CSS_Chapter4 = [["K"], ["L"], ["M"]];
var HTML_CSS_Chapter5 = [["N"], ["P"], ["Q"]];
var HTML_CSS_Chapter6 = [["U"], ["V"], ["S"]];

var HTML_CSS_InFor = [
  new FollowCourses(
    "HTML_Chapter1",
    "Làm quen với HTML",
    "TrackItem_wrapper",
    "Admin_SonDang4.png",
    10,
    HTML_CSS_Chapter1,
  ),
  new FollowCourses("HTML_Chapter2", "HTML CSS Pro", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter2),
  new FollowCourses("HTML_Chapter3", "HTML CSS Pro", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter3),
  new FollowCourses("HTML_Chapter4", "HTML CSS Pro", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter4),
  new FollowCourses("HTML_Chapter5", "HTML CSS Pro", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter5),
  new FollowCourses("HTML_Chapter6", "HTML CSS Pro", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter6),
];
