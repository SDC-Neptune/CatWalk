import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddQuestionModal = ({ questionModalOpen, setQuestionModalOpen, productId, productName}) => {

  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  if (!questionModalOpen) {
    return null;
  }

  const closeModal = () => {
    setQuestionModalOpen(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/qa/questions', {
      data: question,
      name: nickname,
      email: email,
      product_id: productId
    }).then((res) => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    });
  };

  return (
    <div className="modal-overlay qa-modal">
      <div className="modal qa-modal">
        <div className="modal-header qa-modal">
          <span className="modal-title qa-modal">Ask your Question</span>
          <span>About the PRODUCT_NAME_HERE</span>
          <button onClick={closeModal} className="reviewButton">Close</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-question qa-modal">
            <label>Your Question:</label><br></br>
            <textarea className="modal-question-textarea qa-modal" value={question} onChange={e => setQuestion(e.target.value)}></textarea>
          </div>
          <div className="qa-modal qa-nickname-container">
            <label>What is your nickname?: </label><br></br>
            <input className="modal-question-nickname qa-modal" placeholder="Example: jackson11!" value={nickname} onChange={e => setNickname(e.target.value)}></input>
          </div>
          <div>
            <label className="qa-modal-warning">For privacy reasons, do not use your full name or email address.</label><br></br>
            <label >Email: </label><br></br>
            <input className="modal-question-email qa-modal" placeholder="Why did you like the product or not?" value={email} onChange={e => setEmail(e.target.value)}></input><br></br>
            <label className="qa-modal-warning">For authentication reasons. You will not be emailed.</label> <br></br>
          </div>
          <button className="qa-modal-submit reviewButton" type="submit" value="Submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddQuestionModal;