import Container from 'react-bootstrap/Container';
import "./Test.css";

const Test = () => {
    return(
        <>

            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....."/>
                    </form>
                </div>
            </div>
            <header className="header-section">
                <Container fluid>
                    <div className="inner-header">
                        <div className="logo">
                            <a href="./index.html"><img src="img/logo/logo.png" alt=""/></a>
                        </div>
                        <div className="header-right">
                            <img src="img/icons/search.png" alt="" className="search-trigger"/>
                                <img src="img/icons/man.png" alt=""/>
                                    <a href="#">
                                        <img src="img/icons/bag.png" alt=""/>
                                            <span>2</span>
                                    </a>
                        </div>
                        <div className="user-access">
                            <a href="#">회원가입</a>
                            <a href="#" className="in">로그인</a>
                        </div>
                        <nav className="main-menu mobile-menu">
                            <ul>
                                <li><a className="active" href="./index.html">메인</a></li>
                                <li><a href="./categories.html">쇼핑하기</a>
                                    <ul className="sub-menu">
                                        <li><a href="product-page.html">제품 카테고리1</a></li>
                                            <li className="sub-category-menu"><a href="product-page.html">제품</a></li>
                                            <li className="sub-category-menu"><a href="product-page.html">제품</a></li>
                                            <li className="sub-category-menu"><a href="product-page.html">제품</a></li>
                                            <li className="sub-category-menu"><a href="product-page.html">제품</a></li>
                                        <li><a href="shopping-cart.html">제품 카테고리2</a></li>
                                        <li><a href="check-out.html">제품 카테고리3</a></li>
                                    </ul>

                                </li>
                                <li><a href="./product-page.html">주문조회</a></li>
                                <li><a href="./check-out.html">공지사항</a></li>
                                <li><a href="./contact.html">회사소개</a></li>
                            </ul>
                        </nav>
                    </div>
                </Container>
            </header>
            <div class="header-info">
                <Container fluid>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="header-item">
                                <img src="img/icons/delivery.png" alt=""/>
                                    <p>Free shipping on orders over $30 in USA</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-left text-lg-center">
                            <div className="header-item">
                                <img src="img/icons/voucher.png" alt=""/>
                                    <p>20% Student Discount</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-left text-xl-right">
                            <div className="header-item">
                                <img src="img/icons/sales.png" alt=""/>
                                    <p>30% off on dresses. Use code: 30OFF</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )

}

export default Test;