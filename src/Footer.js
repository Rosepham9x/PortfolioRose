import React from 'react';

import {Grid, Row, Col, Image } from 'react-bootstrap';

class Footer extends React.Component {

        buildContent() {
    
        let content = [];
        content.push(
            <Grid key="grid">
                <Row className="show-grid">
                <Col sm={6} md={3}>
                <div className="dulich">
                <Image src="image/dulich.png" responsive/> 
                Phiêu lưu du lịch
               </div>
                </Col>

                <Col sm={6} md={3}>
                <div className="xahoi">
                <Image src="image/xahoi.png" responsive/> 
                Các hoạt động xã hội
               </div>
                </Col>
                <Col sm={6} md={3}>
                <div className="nghenhac">
                <Image src="image/nghenhac.png" responsive/> 
                Nghe nhạc
               </div>

                
                </Col>
                <Col sm={6} md={3}>
                <div className="docsach">
                <Image src="image/docsach.png" responsive/> 
                Đọc sách
               </div>  
            
                    
                </Col>
                </Row>
            </Grid>
        )
        return content;
    }
    render() {
        return (
            <div className="app-footer">
            {this.buildContent()}
            </div>
        ) 
    }
}
export default Footer;