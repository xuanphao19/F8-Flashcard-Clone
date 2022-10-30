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
  this.className = className = "Courses_item";
  this.image = image;
  this.minReq = minReq = 10;
  this.info = info;
  this.arguments = true;
  return {
    id,
    name,
    className,
    image: this.image,
    minReq,
    info,
  };
}
var Unit1InFor = [[], [], []];
var Unit1 = new FollowCourses("Unit1", "HTML CSS Pro", "", "MisaCute.png", 10, Unit1InFor);
