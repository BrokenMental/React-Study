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
          {/* this.props.{속성명} 으로 표현 가능 */}
          <h1>{/*WEB 대신 오른쪽과 같이 사용*/}{this.props.title}</h1>
          {/*world wide web! 대신 아래와 같이 사용*/}
          {this.props.sub}
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
        {/* App에 생성된 Component에 들어간 속성을 동적으로 꺼내 쓸 수 있음 */}
        <h2>{this.props.title}</h2>
        {this.props.desc}
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
        <Subject title="WEB" sub="world wide web!"></Subject>
        {/* Subject Component를 다른 속성으로 두개 나타냄 */}
        <Subject title="React" sub="for UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
