// interface로 타입 지정

interface Square {
  color: string;
  width: number;
}

let 네모: Square = {
  color: "red",
  width: 100,
};

// 문제1)
interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };

// 문제1)
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

// 문제2)
interface Cart {
  product: string;
  price: number;
}

let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

// 문제3)
interface Cart2 extends Cart {
  card: boolean;
}

// 문제4)
interface Question101 {
  plus: (x: number, y: number) => number;
  minus: (x: number, y: number) => number;
}

let question101: Question101 = {
  plus: (x, y) => {
    return x + y;
  },
  minus: (x, y) => {
    return x - y;
  },
};
