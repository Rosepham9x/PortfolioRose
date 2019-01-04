import React from 'react';
import Page from '../Page'

import { Grid, Row, Col, Image} from 'react-bootstrap';
import data from '../Data'

class Standee6Page extends React.Component {
  buidContent() {
    let content = [];
    content.push(
      <Grid key="grid">
      <Row className="show-grid">
          <Col sm={12} md={12}>
          <div className="namebitster">
          <b>POSTER</b> <br></br>
        <span>llustration, graphic</span> <br></br>
        <span>Công ty LOGIGEAR</span>
         </div>
          </Col>
        </Row>
        
        <Row className="show-grid">
          <Col sm={6} md={6}>
          <div className="poster6a">
          <Image src="image/standee6a.jpg" responsive/>
          </div>
          </Col>
          <Col sm={6} md={6}>
          <div className="standeedemo6">
          <Image src="image/standee6a.png" responsive/>
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
export default Standee6Page;