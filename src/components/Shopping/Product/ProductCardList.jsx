import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ProductCardList.css";

const ProductCardList = (props) => {
    return(
        <>
            <section className="latest-products spad">
                <Container>
                    <div className="product-filter">
                        <Row>
                            <Col lg={12} className="text-center">
                                <div className="section-title">
                                    <h2>최신 상품</h2>
                                </div>
                                <ul className="product-controls">
                                    <li data-filter="*">전체</li>
                                    <li data-filter=".bags">골프공</li>
                                    <li data-filter=".shoes">클럽</li>
                                    <li data-filter=".dresses">의상</li>
                                    <li data-filter=".accesories">모자</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <Row className="row" id="product-list">
                        {props.data.map(item => (
                            <Col lg={3} sm={6} className="mix all dresses bags" key={item.title}>
                                <div className="single-product-item" >
                                    <figure>
                                        <Link to={"/shop/product/"+item.product_id}><img src={item.img} alt=""/></Link>
                                        <div className="p-status">new</div>
                                    </figure>
                                    <div className="product-text">
                                        <h6>{item.title}</h6>
                                        <p>{item.price}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                        {/*<Col lg={3} sm={6} className="mix all dresses bags">*/}
                        {/*    <div className="single-product-item">*/}
                        {/*        <figure>*/}
                        {/*            <a href="#"><img src="img/products/img-2.jpg" alt=""/></a>*/}
                        {/*            <div className="p-status sale">sale</div>*/}
                        {/*        </figure>*/}
                        {/*        <div className="product-text">*/}
                        {/*            <h6>Yellow Maxi Dress</h6>*/}
                        {/*            <p>$25.90</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</Col>*/}

                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ProductCardList;
