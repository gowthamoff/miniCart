import React from 'react';

const Refund = () => {
  return (
    <>
      <div className="container">
        <div className="mt-5">
          <h5>Full Refund</h5>
          <div className="form-group">
            <label htmlFor="fullRefundOrderId">Enter Order Id</label>
            <input type="text" className="form-control" id="fullRefundOrderId" />
          </div>
          <button className="btn btn-danger btn-sm">Refund</button>
        </div>

        <div className="mt-4">
          <h5>Partial Refund</h5>
          <div className="form-group">
            <label htmlFor="partialRefundOrderId">Enter Order Id</label>
            <input type="text" className="form-control" id="partialRefundOrderId" />
          </div>
          <div className="form-group">
            <label htmlFor="refundAmount">Enter Amount</label>
            <input type="text" className="form-control" id="refundAmount" />
          </div>
          <button className="btn btn-danger btn-sm">Refund</button>
        </div>

        <div className="mt-4">
          <h5>Response Message</h5>
          <p>Success</p>
        </div>
      </div>
    </>
  );
}

export default Refund;
