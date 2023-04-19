var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// private 키워드 사용 예시
var User = /** @class */ (function () {
    function User(a) {
        this.familyName = "kim"; // 밖에서 수정 불가
        this.name = a + this.familyName;
    }
    User.prototype.이름변경함수 = function () {
        this.familyName = "park";
    };
    return User;
}());
var user1 = new User("민수");
user1.이름변경함수(); // 이런 식으로 바꿔서 쓸 수 있음
// public 사용 시 this 키워드의 생략
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    return Human;
}());
var 자식 = new Human("kim");
// protected
var MyUser = /** @class */ (function () {
    function MyUser() {
        this.x = 10;
    }
    return MyUser;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewUser;
}(MyUser));
// static
var YourUser = /** @class */ (function () {
    function YourUser() {
        this.y = 10;
    }
    YourUser.x = 10;
    return YourUser;
}());
var 아들 = new YourUser();
console.log(아들); //User {y: 20}
// static keyword의 활용
var Skills = /** @class */ (function () {
    function Skills() {
        this.intro = Skills.skill + "전문가입니다";
    }
    Skills.skill = "js"; // 너무 중요한 키워드라 밖으로 못 나가게 하고 싶음
    return Skills;
}());
var 연두 = new Skills();
console.log(연두); // js 전문가입니다
Skills.skill = "ts"; // 이 이후로 오는 것들은 ts 전문가입니다로 출력됨
var 연두2 = new Skills();
console.log(연두2);
