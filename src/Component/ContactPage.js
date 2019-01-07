import React from 'react';
import Page from '../Page'

import { Grid, Row, Col, Image, Panel, Button, FormGroup, FormControl} from 'react-bootstrap';

class ContactPage extends React.Component {
  buidContent() {
    let content = [];
    content.push(
      <Grid key="grid">
        <Row className="show-grid">
          <Col sm={6} md={6}>
            <div className="contact">
              <div className="title">Hãy liên lạc với tôi nhé !</div>
              <form>
                <FormGroup >
                  <FormControl type="textname" placeholder="Họ và tên bạn" />
                </FormGroup>
                <FormGroup>
                  <FormControl type="textemail" placeholder="Email của bạn" />
                </FormGroup>
                <FormGroup>
                  <FormControl type="textphone" placeholder="Điện thoại của bạn" />
                </FormGroup>
                <FormGroup>
                  <FormControl type="texttype" placeholder="Loại công việc" />
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                  <FormControl componentClass="textarea" placeholder="Thông tin chi tiết công việc....." />
                </FormGroup>
              </form>;
                   </div>
            <Button href="rose.cuxi@gmail.com" className="bttn-contact">Gửi tin nhắn</Button>
          </Col>
          <Col sm={6} md={6}>
            <Panel>
              <Panel.Body>
                <div className="infolife">
                  <Image src="image/avatar.png" responsive />
                  <span className="textlife">“Cuộc sống chỉ mang lại cho chúng ta <br></br>
                    10% cơ hội, 90% còn lại là do chúng ta <br></br>
                    trải nghiệm thế nào với nó.”</span> <br></br>
                  <a href="https://drive.google.com/file/d/1cPzZ57PjB_G0awhSZjKbHJRCT0t5IsQV/view?usp=sharing">Link CV pdf</a>
                </div>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>

        <Row className="contact-footer show-grid">
          <Col xs={3} sm={3} md={3}>
            <div className="skype">
              <a href="rose.cuxi">
                <Image src="image/skype.png" responsive />
              </a>
            </div>
          </Col>
          <Col xs={3} sm={3} md={3}>
            <div className="facebook">
              <a href="https://www.facebook.com/rose.nhok">
                <Image src="image/facebook-brands.png" responsive />
              </a>
            </div>
          </Col>
          <Col xs={3} sm={3} md={3}>
            <div className="email">
              <a href="rose.cuxi@gmail.com">
                <Image src="image/email.png" responsive />
              </a>
            </div>
          </Col>
          <Col xs={3} sm={3} md={3}>
            <div className="youtobe">
              <a href="#">
                <Image src="image/youtube-brands.png" responsive />
              </a>
            </div>
          </Col>
        </Row>

      </Grid>
    )


    return content;
  }
  render() {
    return (
      <div className="section-contact">
        {this.buidContent()}
        {/*<Page _content={this.buidContent()}></Page>*/}
      </div>
    );
  }
}
export default ContactPage;