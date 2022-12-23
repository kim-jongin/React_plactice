import React from "react"
const SomeComp = ()=>{
  return (
  <div>이거 컴포넌트
    <button onClick={()=>console.log("click!")}>버튼</button>
  </div>
  )
}
const SomeComp2 = (함수입력값) =>{

function AddCalculator() {
  return(
    <div className={함수입력값.className}>
      {함수입력값.a + 함수입력값.b}
      {함수입력값.children}
    <div>
      <h2>더하기</h2>
      <input type="number" name="num1" />
      <input type="number" name="num2" />
      결과 : 
    </div>

  )
}

function App() {
  return (
    <div className="App">
      {/* 컴포넌트 이름-> 함수이름, 나머지값은 props */}
      {/* 컴포넌트에 들어간 기타 등등의 값을 props라고 불렀다 */}
      <SomeComp2 className="className111isdjlkjsdlf" a={1} b={3} 함수={()=>console.log("함수가실행되었다.")}>
        <SomeComp/>
      </SomeComp2>
    <div>
      <h1>계산기</h1>
      <AddCalculator/>
    </div>
  );
}
export default App;