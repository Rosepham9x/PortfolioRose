import React from 'react';
import Page from '../Page'

import { Grid, Row, Col, Image} from 'react-bootstrap';
import data from '../Data'

class WebappPage extends React.Component {
  buidContent() {
    let content = [];
    content.push(
      <Grid key="grid">
      <Row className="show-grid">
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
          <div className="textbanner">
              <b>BANNER APP</b>
               </div>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col sm={12} md={12}>
          <div className="bannerapp">
                <Image src="image/bannerbitster.png" responsive/> 
               </div>
          </Col>
        </Row>
        
        <Row className="show-grid">
          <Col sm={12} md={12}>
          <div className="textbanner">
              <b>BANNER APP</b>
               </div>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col sm={6} md={6}>
          <div className="layoutbitster1">
          <Image src="image/layoutbitster-01.png" responsive/>
          </div>
          </Col>
          <Col sm={6} md={6}>
          <div className="Mockup PSD1">
          <Image src="image/Music App Phone Mockup PSD.png" responsive/>
          </div>
          </Col>
        </Row>

        <Row className="show-grid">
          <Col sm={12} md={4}>
          <div className="ytuong">
                <Image src="image/ytuong.png" responsive/> 
               <span>Ý TƯỞNG</span>
               </div>
          </Col>
          <Col sm={12} md={4}>
          <div className="layout">
                <Image src="image/layout.png" responsive/> 
                <br></br>
                <span>BỐ CỤC</span>
                </div>
          </Col>
          <Col sm={12} md={4}>
          <div className="mausac">
                <Image src="image/mausac.png" responsive/> 
                <span>MÀU SẮC</span>
                </div>
          </Col>
        </Row>

        <Row className="show-grid">
          <Col sm={12} md={4}>
          <div className="ytuong">
                <Image src="image/ytuong.png" responsive/> 
               <span>Ý TƯỞNG</span>
               </div>
          </Col>
          <Col sm={12} md={4}>
          <div className="layout">
                <Image src="image/layout.png" responsive/> 
                <br></br>
                <span>BỐ CỤC</span>
                </div>
          </Col>
          <Col sm={12} md={4}>
          <div className="mausac">
                <Image src="image/mausac.png" responsive/> 
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
        <Page footerData={data.getAboutMeFooter()} _content={this.buidContent()}></Page>
      </div>
    );
  }
}
export default WebappPage;