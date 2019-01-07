import React from 'react';
import Page from '../Page'

import { Grid, Row, Col, Image} from 'react-bootstrap';
import data from '../Data';
import Footer from '../Footer'

class AboutMePage extends React.Component {
  buidContent() {
    let content = [];
    content.push(
      <Grid key="grid">
      <Row className="show-grid">
          <Col sm={12} md={12}>
          <div className="vetoi">
         <span> <b>CÂU CHUYỆN CỦA TÔI</b></span> <br></br>
         </div>
         <div className="info">
        <span>Những câu chuyện của tôi được bắt đầu</span> <br></br>
        <span> từ ý tưởng, bố cục, màu sắc.</span>
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
        <br></br>
        <Row className="show-grid">
          <Col sm={6} md={9}>
          <div className="text">
          Một câu chuyện của tôi được bắt đầu.....
          <br></br>
          <br></br>
          Bước 1 : Tìm kiếm ý tưởng <br></br>
          Đây là một công ty làm về công nghệ vì vậy phải tạo sự chuyên nghiệp, <br></br>
          sang, hiện đại và thể hiện được đặc thù của ngành đó.
          <br></br>
          <br></br>
          Bước 2 : Sắp xếp bố cục <br></br>
          - Bố cục phải sạch sẽ, gọn gàng và bắt mắt.<br></br>
          - Hoạ tiết không cầu kỳ và hỗ trợ cho nội dung chính nổi bật.<br></br>
          - Font chữ phải tạo sự chuyên nghiệp, sang vừa đơn giản.
          <br></br>
          <br></br>
          Bước 3 : Màu sắc <br></br>
          -  Standee này mang tông màu chủ đạo của logo công ty: <br></br>
          Màu xanh dương, vàng cam.
          </div>
          </Col>
          <Col sm={6} md={3}>
          <div className="hinhsp">
          <Image src="image/hinh sp1.png" responsive />
          </div>
          </Col>
        </Row>
      </Grid>
    )

        return content;
  }
  render() {
    return (
      <div className="section-aboutme">
      {this.buidContent()}
      <Footer data={data.getAboutMeFooter()}></Footer>
        {/*<Page footerData={data.getAboutMeFooter()} _content={this.buidContent()}></Page>*/}
      </div>
    );
  }
}
export default AboutMePage;