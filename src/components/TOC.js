import React, {Component} from 'react';

class TOC extends Component {
    render(){
        let lists = [];
        let data = this.props.data;
        let i = 0;
        while(i < data.length){
            //자동으로 여러 항목을 생성할 경우엔 key라는 uniqe한 props를 넣어줘야 함
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>)
            i = i + 1;
        }
        return (
        <nav>
            <ul>
                {/* 하드코딩 대신 아래와 같이 사용
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li>
                */}
                {lists}
            </ul>
        </nav>
        )
    }
}

//TOC 클래스를 다른곳에서 사용할 수 있도록 선언
export default TOC;