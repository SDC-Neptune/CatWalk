import React from 'react';

const SalesArea = () => {
  return (
    <div className="sales-area-container">
      <div className="sales-area-vertical-image">
        <img
          alt="building with sale writing on window"
          src="https://images.unsplash.com/photo-1604204089339-3c9691fe14f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHNhbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          width="500"
          height="750"
        />
      </div>
      <div>
        <div className="sales-area-horizontal-image">
          <img
            alt="clothing store"
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            width="600"
            height="400"
          />
        </div>
        <div className="sales-area-text">
          The best prices on the internet.  Our prices can't be beat. Free shipping on all orders, for all patrons!!
        </div>
      </div>
    </div>
  );
};

export default SalesArea;