import React, {Component} from 'react';
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

export default Content;