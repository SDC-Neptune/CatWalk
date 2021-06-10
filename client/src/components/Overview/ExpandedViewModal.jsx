import React, { forwardRef } from 'react';

const ExpandedViewModal = forwardRef((props, ref) => {
  return (
    //This line below sets the reference.
    <div className="test-modal" ref={ref}>
      <p>This is an info modal</p>
      <button type="button" onClick={() => props.toggleModal()}>
        Close Modal
      </button>
    </div>
  );
});

export default ExpandedViewModal;