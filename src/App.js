import React, {Component} from 'react';
import './App.css';

//프로젝트 폴더 내에서 create-react-app .(현재 디렉토리)
//서버 실행 방법 : npm run start

//일회용으로 설치, 실행, 삭제를 한번에 하고 싶을 때(항상 최신 버전)
//npx create-react-app {프로젝트명}
//cd {프로젝트 명}
//서버 실행 시 : npm start

//Subject라는 Component 생성
class Subject extends Component {
  //클래스 내의 함수에는 function 표시가 없어도 됨
  render(){
    return (
      //컴포넌트는 꼭 하나의 최상위 태그가 존재
      <header>
          <h1>WEB</h1>
          world wide web!
      </header>
    )
  }
}

class TOC extends Component {
  render(){
    return (
      <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li>
            </ul>
        </nav>
    )
  }
}

class Content extends Component {
  render(){
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    )
  }
}

//App이라는 Component 생성
class App extends Component {
  render(){
    return (
      //컴포넌트는 꼭 하나의 최상위 태그가 존재
      <div className="App">
        {/* 위에 생성된 Subject Component */}
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
