const OrderSummary = (props) => {
    return(
      <>
            <h2>주문확인</h2>
          <ul>
              <li>
                <h2>{props.buyer}</h2>
              </li>
              <li>
                <h2>{props.receiver}</h2>
              </li>
              <li>
                <h2>{props.contact}</h2>
              </li>
              <li>
                <h2>{props.address}</h2>
              </li>
              <li>
                <h2>{props.memo}</h2>
              </li>
              <li>
                <h2>{props.payment}</h2>
              </li>
          </ul>
      </>
    );
}

export default OrderSummary;