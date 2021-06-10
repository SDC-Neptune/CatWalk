import React, { useRef, useState } from 'react';
import ExpandedViewModal from './ExpandedViewModal.jsx';

// const Parent = () => {

//   const [modal, setModal] = useState(false);
//   const modalRef = useRef(null); // returns an object with property current
//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   const handleOutsideClick = (e) => {
//     console.log('modalref.current: ', modalRef.current);
//     console.log('e.target.', e.target);
//     //if modal is currently open & you click outside (modalRef element does not contain element being clicked on)
//     if (modalRef.current && !modalRef.current.contains(e.target)) {
//       setModal(false);
//     }
//   };

//   return (
//     <div className="page" onClick={(e) => handleOutsideClick(e)}>
//       <h3>Page title</h3>
//       <p>Generic page with a button to open a modal</p>
//       <button type="button" onClick={() => toggleModal()}>
//         Open Modal
//       </button>
//       {modal &&
//         <ChildModal ref={modalRef} toggleModal={toggleModal}/>
//       }
//     </div>
//   );
// };

class Parent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.divRef = React.createRef();
  }

  toggleModal() {
    var toggledValue = !this.state.modal;
    this.setState({
      modal: toggledValue
    });
  }

  handleOutsideClick(e) {
    if (this.divRef.current && !this.divRef.current.contains(e.target)) {
      this.setState({
        modal: false
      });
    }
  }

  render() {
    return (
      <div className="page" onClick={this.handleOutsideClick}>
        <h3>Page title</h3>
        <p>Generic page with a button to open a modal</p>
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {this.state.modal &&
          <ExpandedViewModal ref={this.divRef} toggleModal={this.toggleModal}/>
        }
      </div>
    );
  }

}

export default Parent;