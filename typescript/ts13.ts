// private 키워드 사용 예시
class User {
  name: string;
  private familyName: string = "kim"; // 밖에서 수정 불가

  constructor(a) {
    this.name = a + this.familyName;
  }

  이름변경함수() {
    this.familyName = "park";
  }
}

let user1 = new User("민수");
user1.이름변경함수(); // 이런 식으로 바꿔서 쓸 수 있음

// public 사용 시 this 키워드의 생략
class Human {
  constructor(public name: string) {}
}

let 자식 = new Human("kim");

// protected

class MyUser {
  protected x = 10;
}

class NewUser extends MyUser {}

// static
class YourUser {
  static x = 10;
  y = 10;
}

let 아들 = new YourUser();
console.log(아들); //User {y: 20}

// static keyword의 활용
class Skills {
  static skill = "js"; // 너무 중요한 키워드라 밖으로 못 나가게 하고 싶음
  intro = Skills.skill + "전문가입니다";
}

let 연두 = new Skills();
console.log(연두); // js 전문가입니다

Skills.skill = "ts"; // 이 이후로 오는 것들은 ts 전문가입니다로 출력됨

let 연두2 = new Skills();
console.log(연두2);

// namespace 문법
namespace 네임스페이스 {
  export type Name = string | number;
}

let 변수: 네임스페이스.Name = "kim";
