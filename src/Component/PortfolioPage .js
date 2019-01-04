import React from 'react';
import Page from '../Page'

import {Button, Grid, Row, Col, Image} from 'react-bootstrap';

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []}
  }
  buildDetailWebApp() {
    let content = [];
    content.push(
      <Row key={1} className="row1">
            <Col sm={12} md={3}>
            <div className="app1">
            <a href="https://www.behance.net/gallery/52509755/DIARY-1">
                <Image src="image/app1.png" responsive/>
                </a>  
                <span>DIARY</span>
                </div>
            </Col>
            <Col sm={12} md={3}>
            <div className="app2">
            <a href="https://www.behance.net/gallery/52508149/fake-call-test-love-App">
                  <Image src="image/app2.png" responsive/> 
                  </a>
                  <span>BLOVE DIVINE</span>
                  </div>
            </Col>
            <Col sm={12} md={3}>
            <div className="app3">
            <a href="https://www.behance.net/gallery/52508699/loveappss">
                  <Image src="image/app3.png" responsive/>
                  </a> 
                  <span>LOVE IS</span>
                  </div>
            </Col>
            <Col sm={12} md={3}>
            <div className="app4">
            <a href="https://www.behance.net/gallery/63245515/water-remind">
                  <Image src="image/app4.png" responsive/>
                  </a> 
                  <span>WATER</span>
                  </div>
            </Col>
          </Row>
      );
      content.push(
        <Row key={2} className="row2">
          <Col sm={12} md={3}>
          <div className="app5">
          <a href="/San-pham">
                <Image src="image/app5.png" responsive/>
                </a>  
               <span>BITTER</span>
               </div>
          </Col>
          <Col sm={12} md={3}>
          <div className="app6">
          <a href="https://www.behance.net/gallery/52508511/T-vi-2017">
                <Image src="image/app6.png" responsive/>
                </a>  
                <span>DIVINE</span>
                </div>
          </Col>
          <Col sm={12} md={3}>
          <div className="app7">
          <a href="https://www.behance.net/gallery/63035591/Network-Master">
                <Image src="image/app7.png" responsive/>
                </a>   
                <span>NETWORK</span>
                </div>
          </Col>
          <Col sm={12} md={3}>
          <div className="app8">
          <a href="https://www.behance.net/gallery/62912329/Alarm">
                <Image src="image/app8.png" responsive/>
                </a>   
                <span>ALARM</span>
                </div>
          </Col>
        </Row>
      );
    return content;
  }
  buildDetailPOSM() {
    let content = [];
    content.push(
      <Row key={1} className="row1">
            <Col sm={12} md={3}>
            <div className="standee1">
            <a href="/standee1">
                <Image src="image/standee1.png" responsive/>
                </a>  
                <span>STANDEE</span>
                </div>
            </Col>
            <Col sm={12} md={3}>
            <div className="app2">
            <a href="/standee2">
                  <Image src="image/standee2.png" responsive/> 
                  </a>
                  <span>STANDEE</span>
                  </div>
            </Col>
            <Col sm={12} md={3}>
            <div className="app3">
            <a href="/standee3">
                  <Image src="image/standee3.png" responsive/>
                  </a> 
                  <span>STANDEE</span>
                  </div>
            </Col>
            <Col sm={12} md={3}>
            <div className="app4">
            <a href="/standee4">
                  <Image src="image/standee4.png" responsive/>
                  </a> 
                  <span>STANDEE</span>
                  </div>
            </Col>
          </Row>
      );
      content.push(
        <Row key={2} className="row2">
          <Col sm={12} md={3}>
          <div className="app5">
          <a href="/standee5">
                <Image src="image/standee5.png" responsive/>
                </a>  
               <span>POSTER</span>
               </div>
          </Col>
          <Col sm={12} md={3}>
          <div className="app6">
          <a href="/standee6">
                <Image src="image/standee6.png" responsive/>
                </a>  
                <span>POSTER</span>
                </div>
          </Col>
          <Col sm={12} md={3}>
          <div className="app7">
          <a href="/standee7">
                <Image src="image/standee7.png" responsive/>
                </a>   
                <span>BANNER</span>
                </div>
          </Col>
          <Col sm={12} md={3}>
          <div className="app8">
          <a href="/standee8">
                <Image src="image/standee8.png" responsive/>
                </a>   
                <span>POSTER</span>
                </div>
          </Col>
        </Row>
      );
    return content;
  }
  buildDetailVideo() {
    let content = [];
    content.push(
      <Row key={1} className="row1">
            <Col sm={6} md={6}>
            <div className="video1">
            <a href="https://drive.google.com/file/d/1o8X1G_VXgFp6MZXZr8TwlnQO9X0FJCUJ/view?usp=sharing">
                <Image src="image/video1.png" responsive/>
                </a>  
                <span>T.Y.K FARM</span>
                </div>
            </Col>
            <Col sm={6} md={6}>
            <div className="video2">
            <a href="https://www.facebook.com/Dochoigiaykami/videos/2044571968889812/?t=1">
                  <Image src="image/video2.png" responsive/> 
                  </a>
                  <span>AUDIO KỂ CHUYỆN</span>
                  </div>
            </Col>
          </Row>
      );
    /*  content.push(
        <Row key={2} className="row2">
          <Col sm={12} md={3}>
          <div className="video5">
          <a href="#">
                <Image src="image/video1.png" responsive/>
                </a>  
               <span>VIDEO</span>
               </div>
          </Col>
          <Col sm={12} md={3}>
          <div className="video6">
          <a href="#">
                <Image src="image/video2.png" responsive/>
                </a>  
                <span>VIDEO</span>
                </div>
          </Col>
          <Col sm={12} md={3}>
          <div className="video7">
          <a href="#">
                <Image src="image/video1.png" responsive/>
                </a>   
                <span>VIDEO</span>
                </div>
          </Col>
          <Col sm={12} md={3}>
          <div className="video8">
          <a href="#">
                <Image src="image/video2.png" responsive/>
                </a>   
                <span>VIDEO</span>
                </div>
          </Col>
        </Row>
      ); */
    return content;
  }
  buildDetail(index) {
    let detail = [];
    switch(index) {
      case 1:
        detail = this.buildDetailWebApp();
        break;
      case 2:
        detail = this.buildDetailPOSM();
        break;
      case 3:
        detail = this.buildDetailVideo();
        break;
    }
    this.setState({data: detail});
  }
  buidContent() {
    let content = [];
    content.push(
      <Grid key="grid">
      <Row className="show-grid">
          <Col sm={12} md={4}>
          <Button onClick={()=>{this.buildDetail(1)}} className="bttn1">WEB/APP</Button>
          </Col>

            <Col sm={12} md={4}>
          <Button onClick={()=>{this.buildDetail(2)}} className="bttn2">POSM</Button>
          </Col>

          <Col sm={12} md={4}>
          <Button  onClick={()=>{this.buildDetail(3)}} className="bttn3">VIDEO</Button>
          </Col>
        </Row>
        {this.state.data}
      </Grid>
    )

        return content;
  }
  componentDidMount() {
    this.buildDetail(1);
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