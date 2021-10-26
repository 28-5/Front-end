import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useHistory} from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ProductCardList.css";


const ProductCardList = (props) => {
    const { pathname }               = useLocation();
    const history                    = useHistory();
    const [selectedMenu, selectMenu] = useState(0);
    let productData                  = props.data;
    const subMenuHandler             = event =>{
        selectMenu(event.target.value);
        history.push(`${pathname}?category=${selectedMenu}`);
        };

    switch (selectedMenu) {
        case 0: productData = props.data;
                break;
        case 1: productData = props.categorizedData[0];
                break;
        case 2: productData = props.categorizedData[1];
                break;
        case 3: productData = props.categorizedData[2];
                break;
        default: productData = props.data;
    }
return (
        <>
            <section className="latest-products spad">
                <Container>
                    <div className="product-filter">
                        <Row>
                            <Col lg={12} className="text-center">
                                <div className="section-title">
                                    {pathname === "/shop/allproducts" ? <h2>전체 상품</h2> : <h2>베스트 상품</h2>}
                                </div>
                                <ul className="product-controls">
                                    <li value={0} onClick={subMenuHandler}>전체</li>
                                    <li value={1} onClick={subMenuHandler}>골프클럽</li>
                                    <li value={2} onClick={subMenuHandler}>골프용품</li>
                                    <li value={3} onClick={subMenuHandler}>골프웨어</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <Row className="row" id="product-list">

                        {productData.map(item => (
                            <Col lg={3} sm={6} className="mix all dresses bags" key={item.idx}>
                                <div className="single-product-item">
                                    <figure>
                                        <Link to={{
                                            pathname: "/shop/product/" + item.idx,
                                            state: {
                                                data: item
                                            }}}>
                                            <img src={"/display?fileName="+item.imageDtoList[0].imageURL} alt=""/>
                                        </Link>
                                        {pathname === "/shop" && <div className="p-status popular">BEST</div>}
                                    </figure>
                                    <div className="product-text">
                                        <h6>{item.title}</h6>
                                        <p>{item.price.toLocaleString('ko-KR')}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}

                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ProductCardList;
