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
      );
      content.push(
        <Row key={2} className="row2">
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
      );
    return content;
  }
  buildDetailPOSM() {
    let content = [];
    content.push(
      <Row key={1} className="row1">
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
      );
      content.push(
        <Row key={2} className="row2">
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
      );
    return content;
  }
  buildDetailVideo() {
    let content = [];
    content.push(
      <Row key={1} className="row1">
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
                  <span>MÀU SẮC 2</span>
                  </div>
            </Col>
          </Row>
      );
      content.push(
        <Row key={2} className="row2">
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
                <span>MÀU SẮC 3</span>
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
      );
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