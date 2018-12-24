import React from 'react';
import Page from '../Page'

import { Grid, Row, Col, Image, Panel, Button } from 'react-bootstrap';
import data from '../data'

class HomePage extends React.Component {
  buidContent() {
    let content = [];
    content.push(
      <Grid key="grid">
        <Row className="show-grid">
          <Col sm={6} md={6}>
            <Image src="image/hinh 1.png" responsive />
          </Col>
          <Col sm={6} md={6}>
            <Panel>
              <Panel.Body>
                <div className="content-email">EMAIL ME : rose.cuxi@gmail.com</div>
                <div className="loichao">
                   Xin chào!
                   Tôi là Nhung Phạm.
                   Graphic designer.
                   UI/UX designer.
                   </div>
                   <div className="gioithieu">
                   UI/UX & Graphic Design là niềm đam mê của tôi, 
                   tôi luôn theo đuổi nó, luôn muốn những sản phẩm mình làm ra sẽ
                    ngày càng đẹp, hoàn mỹ hơn.
                   </div>
                   <Button className="bttn-por">go to portfolio</Button>
                </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )

    
        return content;
  }
  render() {
    return (
      <div className="home-page">
        <Page footerData={data.getHomeFooter()} _content={this.buidContent()}></Page>
      </div>
    );
  }
}
export default HomePage;