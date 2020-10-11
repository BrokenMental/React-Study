import React, {Component} from 'react';

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

export default Subject;