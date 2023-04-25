import "./App.css";

function App() {
  return (
    <div>
      <h4>안녕하십니까</h4>
      <Profile name="철수" age="20" />
    </div>
  );
}

function Profile(props: { name: string; age: string }): JSX.Element {
  return (
    <>
      <div>{props.name}입니다</div>
      <div>나이는 {props.age}입니다</div>
    </>
  );
}

export default App;
