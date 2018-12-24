import React from 'react';
import {Thumbnail, Button} from 'react-bootstrap';

class Product extends React.Component {
    render() {
        return (
            <div className="product-item">
                <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                    <h3>{this.props.data.product_name}</h3>
                    <p>{this.props.data.product_description}</p>
                    <p>
                        <Button bsStyle="primary">Button</Button>
                            &nbsp;
                        <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>

            </div>
        );
    }
}

export default Product;