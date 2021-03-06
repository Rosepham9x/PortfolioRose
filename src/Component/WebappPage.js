import React from 'react';
import Page from '../Page'

import { Grid, Row, Col, Image} from 'react-bootstrap';
import data from '../Data'

class WebappPage extends React.Component {
  buidContent() {
    let content = [];
    content.push(
      <Grid key="grid">
      <Row className="show-grid" className="standee">
          <Col sm={12} md={12}>
          <div className="namebitster">
          <b>BITSTER</b> <br></br>
        <span>UI/UX, Illustration</span> <br></br>
        <span>Công ty truyền thông BTH</span>
         </div>
          </Col>
        </Row>
        <br></br>
        <Row className="show-grid">
          <Col sm={6} md={9}>
          <div className="contentapp">
          <b>ICON APP</b> 
          <br></br>
          <span>
          Bitsler là một ứng dụng cờ bạc trực tuyến cung cấp <br></br>
          người BTC, ETH, LTC, Doge bằng cờ bạc. Kiếm được lên đến 1 BTC ngày với niềm đam mê.<br></br>
          - Vòi cao, vòi nước không giới hạn<br></br>
          - Hỗ trợ tốt nhất và đội ngũ nhân viên trong ngành công nghiệp cờ bạc<br></br>
          - Nhiều trò chơi để lựa chọn
          </span>          
          </div>
          </Col>
          <Col sm={6} md={3}>
          <div className="hinhsp">
          <Image src="image/iconbister.png" responsive/>
          </div>
          </Col>
        </Row>
         
        <Row className="show-grid">
          <Col sm={12} md={12}>
          <div className="textbanner portfolio-item">
              <b>BANNER APP</b>
               </div>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col sm={12} md={12}>
          <div className="bannerapp portfolio-item">
                <Image src="image/bannerbitster.png" responsive/> 
               </div>
          </Col>
        </Row>
        
        <Row className="show-grid">
          <Col sm={12} md={12}>
          <div className="textbanner">
              <b>CÁC TRANG TRONG</b>
               </div>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col sm={6} md={6}>
          <div className="layoutbitster0 portfolio-item">
          <Image src="image/layoutbitster-01.png" responsive/>
          </div>
          </Col>
          <Col sm={6} md={6}>
          <div className="Mockup PSD1 portfolio-item">
          <Image src="image/Music App Phone Mockup PSD.png" responsive/>
          </div>
          </Col>
        </Row>

      <div className="rowsp1">
        <Row className="show-grid">
          <Col sm={12} md={4}>
          <div className="layout1 portfolio-item">
                <Image src="image/layoutbitster-04.png" responsive/> 
               </div>
          </Col>
          <Col sm={12} md={4}>
          <div className="layout2 portfolio-item">
                <Image src="image/layoutbitster-04a.png" responsive/>
                </div>
          </Col>
          <Col sm={12} md={4}>
          <div className="layout3 portfolio-item">
                <Image src="image/layoutbitster-05.png" responsive/>
                </div>
          </Col>
        </Row>
        </div>
        
        <Row className="show-grid">
          <Col sm={12} md={4}>
          <div className="layout4 portfolio-item">
                <Image src="image/layoutbitster-06.png" responsive/> 
               </div>
          </Col>
          <Col sm={12} md={4}>
          <div className="layout5 portfolio-item">
                <Image src="image/layoutbitster-07.png" responsive/> 
                </div>
          </Col>
          <Col sm={12} md={4}>
          <div className="layou6 portfolio-item">
                <Image src="image/layoutbitster-08.png" responsive/> 
                </div>
          </Col>
        </Row>
      </Grid>
    )

        return content;
  }
  render() {
    return (
      <div>
        <Page footerData={data.getAboutMeFooter()} _content={this.buidContent()}></Page>
      </div>
    );
  }
}
export default WebappPage;