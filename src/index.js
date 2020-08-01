import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//리액트는 최종으로 단 한개의 컴포넌트를 그려야 하기 때문에, 여기에다가 두개 이상의
//컴포넌트를 적으면 안됨. (한개의 컴포넌트 안에 다른 거 import 하는 느낌으로 하자)
ReactDOM.render(<App />, document.getElementById("root"));
