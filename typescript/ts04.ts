// 함수의 타입 지정
function 함수41(x: number): number {
  return x * 2;
}

// 함수에서 void 타입 활용 가능
function 함수42(x: number) {
  1 + 1;
}

// 파라미터가 옵션일 경우
function 함수43(x?: number) {
  1 + 1;
}

함수43();

// 문제1)
function question41(x?: string) {
  if (x) {
    console.log(`안녕하세요 ${x}`);
  } else {
    console.log("이름이 없습니다");
  }
}

// 문제2)
function question42(x: number | string): number {
  return x.toString().length;
}

// 문제3)
function question43(money: number, house: boolean, charm: string) {
  let score: number = 0;

  score += money;
  if (house) score += 500;
  if (charm === "상") score += 100;

  if (score >= 600) return "결혼가능";
}
