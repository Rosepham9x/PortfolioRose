import React from 'react';
import Page from '../Page'

import { Grid, Row, Col, Image} from 'react-bootstrap';

class ExperiencePage extends React.Component {
  buidContent() {
    let content = [];
    content.push(
      <Grid key="grid">
      <Row className="show-grid">
          <Col sm={12} md={12}>
          <div className="kynang">
          <b>KỸ NĂNG</b> <br></br>
        
         </div>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col sm={12} md={12}>
          <div className="pm">
                <Image src="image/pm.png" responsive/> 
               </div>
          </Col>
        </Row>
      </Grid>
    )

        return content;
  }
  render() {
    return (
      <div className="section-experience" id="kinhnghiem">
      {this.buidContent()}
      {/*<Page _content={this.buidContent()}></Page>*/} 
      </div>
    );
  }
}
export default ExperiencePage;