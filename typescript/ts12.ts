// && 연산자로 null & undefined 체크하기
function 함수121(a: string | undefined) {
  if (a && typeof a === "string") {
    console.log("type은 string");
  }
}

// object narrowing
type Fish = { swim: string };
type Bird = { fly: string };

function 함수122(animal: Fish | Bird) {
  if ("swim" in animal) {
    console.log("Fish 타입인지 검사 가능", animal.swim);
  }
}

// object 타입이 똑같(비슷)할 때
type Car = {
  wheel: "4개";
  color: string;
};

type Bike = {
  wheel: "2개";
  color: string;
};

function 함수123(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log("x 변수는 Car 타입");
  }
}
