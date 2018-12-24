import React from 'react';
import Page from '../Page'

import {Button, Grid, Row, Col, Image} from 'react-bootstrap';

class PortfolioPage extends React.Component {
  buidContent() {
    let content = [];
    content.push(
      <Grid key="grid">
      <Row className="show-grid">
          <Col sm={12} md={4}>
          <Button className="bttn1">WEB/APP</Button>
          </Col>

            <Col sm={12} md={4}>
          <Button className="bttn2">POSM</Button>
          </Col>

          <Col sm={12} md={4}>
          <Button className="bttn3">VIDEO</Button>
          </Col>
        </Row>
        <Row className="row1">
          <Col sm={12} md={3}>
          <div className="app1">
          <a href="#">
               <Image src="image/app1.png" responsive/>
               </a>  
               <span>Ý TƯỞNG</span>
               </div>
          </Col>
          <Col sm={12} md={3}>
          <div className="app2">
          <a href="#">
                <Image src="image/app2.png" responsive/> 
                </a>
                <span>BỐ CỤC</span>
                </div>
          </Col>
          <Col sm={12} md={3}>
          <div className="app3">
          <a href="#">
                <Image src="image/app3.png" responsive/>
                </a> 
                <span>MÀU SẮC</span>
                </div>
          </Col>
          <Col sm={12} md={3}>
          <div className="app4">
          <a href="#">
                <Image src="image/app4.png" responsive/>
                </a> 
                <span>MÀU SẮC</span>
                </div>
          </Col>
        </Row>
        <br></br>
        <Row className="row2">
          <Col sm={12} md={3}>
          <div className="app5">
          <a href="#">
                <Image src="image/app5.png" responsive/>
                </a>  
               <span>Ý TƯỞNG</span>
               </div>
          </Col>
          <Col sm={12} md={3}>
          <div className="app6">
          <a href="#">
                <Image src="image/app6.png" responsive/>
                </a>  
                <span>BỐ CỤC</span>
                </div>
          </Col>
          <Col sm={12} md={3}>
          <div className="app7">
          <a href="#">
                <Image src="image/app7.png" responsive/>
                </a>   
                <span>MÀU SẮC</span>
                </div>
          </Col>
          <Col sm={12} md={3}>
          <div className="app8">
          <a href="#">
                <Image src="image/app8.png" responsive/>
                </a>   
                <span>MÀU SẮC</span>
                </div>
          </Col>
        </Row>
      </Grid>
    )

        return content;
  }
  render() {
    return (
      <div className="home-page">
        <Page _content={this.buidContent()}></Page>
      </div>
    );
  }
}
export default PortfolioPage;