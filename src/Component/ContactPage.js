import React from 'react';
import Page from '../Page'

import { Grid, Row, Col, Image, Panel, Button, FormGroup,FormControl } from 'react-bootstrap';

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
                <FormGroup  bsSize="large">
                  <FormControl type="textdetail" placeholder="Thông tin chi tiết công việc" />
                </FormGroup>
              </form>;
                   </div>
            <Button className="bttn-contact">Gửi tin nhắn</Button>
          </Col>
          <Col sm={6} md={6}>
            <Panel>
              <Panel.Body>
                <div className="textlife">
                  <Image src="image/avatar.png" responsive />
                  <span className="textlife">“Cuộc sống chỉ mang lại cho chúng ta <br></br>
                    10% cơ hội, 90% còn lại là do chúng ta <br></br>
                    trải nghiệm thế nào với nó.”</span> <br></br>
                   <a href="url">Link CV pdf</a>
                </div>
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
        <Page _content={this.buidContent()}></Page>
      </div>
    );
  }
}
export default ContactPage;