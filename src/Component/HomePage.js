import React from 'react';
import Page from '../Page'

import { Grid, Row, Col, Image, Panel, Button } from 'react-bootstrap';
import data from '../Data'

import AboutMePage from './AboutMePage';
import ExperiencePage from './ExperiencePage';
import PortfolioPage from './PortfolioPage ';
import ContactPage from './ContactPage';

class HomePage extends React.Component {
  buidContent() {
    let content = [];
    content.push(
      <Grid key="grid" id={"home"}>
        <Row className="show-grid">
          <Col sm={6} md={6}>
            <Image src="image/hinh 1.png" responsive />
          </Col>
          <Col sm={6} md={6}>
            <Panel>
              <Panel.Body>
                <div className="content-email">EMAIL ME : rose.cuxi@gmail.com</div>
                <div className="loichao">
                   <span>Xin chào!</span>
                   <span>Tôi là Nhung Phạm.</span>
                   <span> Graphic designer.</span>
                   <span>UI/UX designer.</span>
                   </div>
                   <div className="gioithieu">
                   <span>UI/UX & Graphic Design là niềm đam mê của tôi,</span> <br></br>
                   <span>tôi luôn theo đuổi nó, luôn muốn những sản phẩm mình</span> <br></br>
                   <span>làm ra sẽ ngày càng đẹp, hoàn mỹ hơn.</span>
                   </div>
                   <Button href="/portfolio" className="bttn-por">go to portfolio</Button>
                 
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
        <AboutMePage></AboutMePage>
        <ExperiencePage></ExperiencePage>
        <PortfolioPage></PortfolioPage>
        <ContactPage></ContactPage>
      </div>
    );
  }
}
export default HomePage;