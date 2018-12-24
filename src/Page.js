import React from 'react';

import Header from './Header'
import Footer from './Footer'
import Content from './Content'

class Page extends React.Component {
    render(){
        return (
            <div>
              <Header></Header>
              <Content Content={this.props._content}> </Content>
              <Footer data={this.props.footerData}></Footer>
            </div>
        )
    }
}

export default Page;