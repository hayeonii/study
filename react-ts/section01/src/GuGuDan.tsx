import * as React from "react";
import { useState, useRef } from "react";

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  // input에서 입력된 값이 들어갈 예정이기 때문에 제네릭 'HTMLInputElement'로 설정
  const inputEl = useRef<HTMLInputElement>(null);

  // 타입 추론이 정확하지 않기 때문에 에러가 발생
  // 반면에 Form 이벤트는 Form에서만 일어나기 때문에 적어주지 않아도 ㅇㅋ 하지만 써 주는 것이 좋다 ..
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputEl.current;

    // 정답 맞췄으면?
    if (parseInt(value) === first * second) {
      setResult("정답");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");

      if (input) input.focus();
      // 혹은 input!.focus()
      // 확정할당어설션: 무조건 존재한다는 확신이 있을 때 사용
    } else {
      setResult("땡");
      setValue("");
    }
  };

  return (
    <>
      <div>
        {first} 곱하기 {second}는?
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          type="number"
          value={value}
          // 여기서는 타입 추론이 가능하기 때문에 에러가 발생하지 않음
          // change 이벤트는 input에서만 일어나는 것이 아니라 다른 태그에서도 발생할 수 있기 때문에 <HTMLInputElement>를 명시적으로 적어 주는 것이 좋음
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  );
};

export default GuGuDan;
