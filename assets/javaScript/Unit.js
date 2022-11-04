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

var HTML_CSS_Chapter13 = [];
var HTML_CSS_Chapter14 = [];
var HTML_CSS_Chapter15 = [];
var HTML_CSS_Chapter16 = [];
var HTML_CSS_Chapter17 = [];
var HTML_CSS_Chapter18 = [];
var HTML_CSS_Chapter19 = [];
var HTML_CSS_Chapter20 = [];
var HTML_CSS_Chapter21 = [];
var HTML_CSS_Chapter22 = [];
var HTML_CSS_Chapter23 = [];
var HTML_CSS_Chapter24 = [];
var HTML_CSS_Chapter25 = [];
var HTML_CSS_Chapter26 = [];
var HTML_CSS_Chapter27 = [];
var HTML_CSS_Chapter28 = [];
var HTML_CSS_Chapter29 = [];
var HTML_CSS_Chapter30 = [];
var HTML_CSS_Chapter31 = [];
var HTML_CSS_Chapter32 = [];
var HTML_CSS_Chapter33 = [];
var HTML_CSS_Chapter34 = [];
var HTML_CSS_Chapter35 = [];
var HTML_CSS_Chapter36 = [];
var HTML_CSS_Chapter37 = [];
var HTML_CSS_Chapter38 = [];
var HTML_CSS_Chapter39 = [];
var HTML_CSS_Chapter40 = [];
var HTML_CSS_Chapter41 = [];
var HTML_CSS_Chapter42 = [];
var HTML_CSS_Chapter43 = [];
var HTML_CSS_Chapter44 = [];
var HTML_CSS_Chapter45 = [];
var HTML_CSS_Chapter46 = [];
var HTML_CSS_Chapter47 = [];
var HTML_CSS_Chapter48 = [];
var HTML_CSS_Chapter49 = [];
var HTML_CSS_Chapter50 = [];
var HTML_CSS_Chapter51 = [];
var HTML_CSS_Chapter52 = [];
var HTML_CSS_Chapter53 = [];
var HTML_CSS_Chapter54 = [];
var HTML_CSS_Chapter55 = [];
var HTML_CSS_Chapter56 = [];
var HTML_CSS_Chapter57 = [];
var HTML_CSS_Chapter58 = [];
var HTML_CSS_Chapter59 = [];
var HTML_CSS_Chapter60 = [];
var HTML_CSS_Chapter61 = [];
var HTML_CSS_Chapter62 = [];
var HTML_CSS_Chapter63 = [];
var HTML_CSS_Chapter64 = [];
var HTML_CSS_Chapter65 = [];
var HTML_CSS_Chapter66 = [];
var HTML_CSS_Chapter67 = [];

var HTML_CSS_InFor = [
  new FollowCourses("HTML_Chapter1", "Hiểu biết chung ", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter1),
  new FollowCourses(
    "HTML_Chapter2",
    "Làm quen với HTML",
    "TrackItem_wrapper",
    "Admin_SonDang4.png",
    10,
    HTML_CSS_Chapter2,
  ),
  new FollowCourses("HTML_Chapter3", "Các thẻ tiêu đề", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter3),
  new FollowCourses("HTML_Chapter4", "Thẻ đoạn văn", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter4),
  new FollowCourses("HTML_Chapter5", "Chữ đậm, chữ nghiêng", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter5),
  new FollowCourses("HTML_Chapter6", "HTML Semantic", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter6),
  new FollowCourses("HTML_Chapter7", "Thẻ danh sách", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter7),
  new FollowCourses("HTML_Chapter8", "Sử dụng liên kết", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter8),
  new FollowCourses("HTML_Chapter9", "Sử dụng hình ảnh", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter9),
  new FollowCourses("HTML_Chapter10", "Tra cứu thẻ HTML", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter10),
  new FollowCourses("HTML_Chapter11", "Comments và Blank space", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter11),
  new FollowCourses("HTML_Chapter12", "Tính hợp lệ của HTML", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter12),
  new FollowCourses("HTML_Chapter13", "Làm quen với CSS", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter13),
  new FollowCourses("HTML_Chapter14", "Tính kế thừ CSS", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter14),
  new FollowCourses("HTML_Chapter15", "Thẻ Inline và thẻ Block", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter15),
  new FollowCourses("HTML_Chapter16", "CSS Selectors cơ bản", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter16),
  new FollowCourses("HTML_Chapter17", "Đệm, viền, khoảng lề", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter17),
  new FollowCourses("HTML_Chapter18", "Đơn vị trong CSS", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter18),
  new FollowCourses("HTML_Chapter19", "Làm việc với màu sắc", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter19),
  new FollowCourses("HTML_Chapter20", "Làm việc với background", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter20),
  new FollowCourses("HTML_Chapter21", " Làm việc với font chữ", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter21),
  new FollowCourses("HTML_Chapter22", "Làm việc với hình ảnh", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter22),
  new FollowCourses("HTML_Chapter23", "Thuộc tính vị trí", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter23),
  new FollowCourses("HTML_Chapter24", "Sử dụng Emmet", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter24),
  new FollowCourses("HTML_Chapter25", "Làm việc với pseudo-elements", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter25),
  new FollowCourses(
    "HTML_Chapter26",
    "Làm việc với overflow, scrollbar",
    "TrackItem_wrapper",
    "",
    10,
    HTML_CSS_Chapter26,
  ),
  new FollowCourses(
    "HTML_Chapter27",
    "Các thuộc tính CSS quan trọng khác",
    "TrackItem_wrapper",
    "",
    10,
    HTML_CSS_Chapter27,
  ),
  new FollowCourses("HTML_Chapter28", "Biến trong CSS", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter28),
  new FollowCourses("HTML_Chapter29", "Làm việc với table", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter29),
  new FollowCourses("HTML_Chapter30", "CSS selectors nâng cao", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter30),
  new FollowCourses("HTML_Chapter31", "Hướng dẫn đặt tên class", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter31),
  new FollowCourses("HTML_Chapter32", "Đặt tên class theo BEM", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter32),
  new FollowCourses("HTML_Chapter33", "Cài đặt và sử dụng VS Code", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter33),
  new FollowCourses("HTML_Chapter34", "Sử dụng đường dẫn trong dự án", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter34),
  new FollowCourses("HTML_Chapter35", "Dàn trang", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter35),
  new FollowCourses("HTML_Chapter36", "Semantic và HTML5", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter36),
  new FollowCourses("HTML_Chapter37", "Dàn trang với Float", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter37),
  new FollowCourses("HTML_Chapter38", "Dàn trang với Flex Box", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter38),
  new FollowCourses("HTML_Chapter39", "Dự án I", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter39),
  new FollowCourses("HTML_Chapter40", "Dự án II", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter40),
  new FollowCourses("HTML_Chapter41", "Dàn trang với CSS Grid", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter41),
  new FollowCourses("HTML_Chapter42", "Dự án III", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter42),
  new FollowCourses("HTML_Chapter43", "Làm việc với bảng", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter43),
  new FollowCourses("HTML_Chapter44", "Forms và Validations", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter44),
  new FollowCourses(
    "HTML_Chapter45",
    "Cách custom các thẻ trong form",
    "TrackItem_wrapper",
    "",
    10,
    HTML_CSS_Chapter45,
  ),
  new FollowCourses("HTML_Chapter46", "Thuộc tính Filter", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter46),
  new FollowCourses("HTML_Chapter47", "Animations", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter47),
  new FollowCourses("HTML_Chapter48", "Dự án IV", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter48),
  new FollowCourses("HTML_Chapter49", "Dự án V", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter49),
  new FollowCourses("HTML_Chapter50", "Các thẻ quan trọng khác", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter50),
  new FollowCourses("HTML_Chapter51", "Web Accessibility", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter51),
  new FollowCourses("HTML_Chapter52", "Tìm hiểu về UI và UX", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter52),
  new FollowCourses("HTML_Chapter53", "Rèn luyện mắt thẩm mỹ", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter53),
  new FollowCourses("HTML_Chapter54", "Responsive Web Design", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter54),
  new FollowCourses("HTML_Chapter55", "Dự án VI", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter55),
  new FollowCourses("HTML_Chapter56", "Grid System 12 Columns", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter56),
  new FollowCourses("HTML_Chapter57", "Dự án VII", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter57),
  new FollowCourses("HTML_Chapter58", "Sử dụng Sass", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter58),
  new FollowCourses("HTML_Chapter59", "Kiến thức SEO cơ bản", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter59),
  new FollowCourses("HTML_Chapter60", "Tối ưu trang web", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter60),
  new FollowCourses("HTML_Chapter61", "Dự án VIII", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter61),
  new FollowCourses("HTML_Chapter62", "Sử dụng hàm trong CSS", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter62),
  new FollowCourses("HTML_Chapter63", "Sử dụng Github", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter63),
  new FollowCourses("HTML_Chapter64", "Kiến thức khác", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter64),
  new FollowCourses("HTML_Chapter65", "Nguồn tài nguyên hay", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter65),
  new FollowCourses("HTML_Chapter66", "Hoàn thành khóa học 🥇", "TrackItem_wrapper", "", 10, HTML_CSS_Chapter66),
  new FollowCourses(
    "HTML_Chapter67",
    "Hẹn gặp lại tại khóa JavaScript Pro 💕",
    "TrackItem_wrapper",
    "",
    10,
    HTML_CSS_Chapter67,
  ),
];
