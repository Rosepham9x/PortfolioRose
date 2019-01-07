import React from 'react';
import Page from '../Page'

import { Grid, Row, Col, Image} from 'react-bootstrap';
import data from '../Data'

class Standee7Page extends React.Component {
  buidContent() {
    let content = [];
    content.push(
      <Grid key="grid">
      <Row className="show-grid" className="standee">
          <Col sm={12} md={12}>
          <div className="namebitster">
          <b>BANNER</b> <br></br>
        <span>llustration, graphic</span> <br></br>
        <span>DRD</span>
         </div>
          </Col>
        </Row>
        
        <Row className="show-grid">
          <Col sm={12} md={12}>
          <div className="banner">
          <Image src="image/standee7a.jpg" responsive/>
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
export default Standee7Page;