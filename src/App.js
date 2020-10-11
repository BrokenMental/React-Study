import React, {Component} from 'react';
import TOC from './components/TOC'; //component/TOC 의 TOC 클래스를 가져다 씀
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

//프로젝트 폴더 내에서 create-react-app .(현재 디렉토리)
//서버 실행 방법 : npm run start

//일회용으로 설치, 실행, 삭제를 한번에 하고 싶을 때(항상 최신 버전)
//npx create-react-app {프로젝트명}
//cd {프로젝트 명}
//서버 실행 시 : npm start

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
