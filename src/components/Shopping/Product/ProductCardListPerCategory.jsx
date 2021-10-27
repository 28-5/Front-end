import React from "react";
import {Link, useLocation} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ProductCardList.css";
import LoaddingSpinner from "../../UI/LoaddingSpinner";

const ProductCardListPerCategory = (props) => {
    const location        = useLocation();
    let categoryName;
    switch (location.pathname.slice(15)) {
        case "0": categoryName = "골프클럽";
                break;
        case "1": categoryName = "골프용품";
                break;
        case "2": categoryName = "골프웨어";
                break;
        case "3": categoryName = "드라이버";
                break;
        case "4": categoryName = "우드";
                break;
        case "5": categoryName = "아이언";
                break;
        case "6": categoryName = "풀세트";
                break;
        case "7": categoryName = "골프공";
                break;
        case "8": categoryName = "골프가방";
                break;
        case "9": categoryName = "골프장갑";
                break;
        case "10": categoryName = "골프모자";
                break;
        case "11": categoryName = "골프화";
                break;
        case "12": categoryName = "아우터";
                break;
        case "13": categoryName = "상의";
                break;
        case "14": categoryName = "하의";
                break;
        case "15": categoryName = "양말";
                break;
        default: categoryName = "즐거운 쇼핑!"
                break;
    }
return (
        <>
            <section className="latest-products spad">
                <Container>
                    <div className="product-filter">
                        <Row>
                            <Col lg={12} className="text-center">
                                <div className="section-title">
                                   <h2>{categoryName}</h2>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row className="row" id="product-list">
                        {props.data !== undefined ? props.data.map(item => (
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
                                    </figure>
                                    <div className="product-text">
                                        <h6>{item.title}</h6>
                                        <p>{item.price.toLocaleString('ko-KR')}</p>
                                    </div>
                                </div>
                            </Col>
                        )): <LoaddingSpinner/>}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ProductCardListPerCategory;
