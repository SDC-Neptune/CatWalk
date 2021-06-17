import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddQuestionModal = ({ questionModalOpen, setQuestionModalOpen, productId, productName }) => {

  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState('Submit');

  if (!questionModalOpen) {
    return null;
  }

  const closeModal = () => {
    setQuestionModalOpen(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const invalidEmail = !email || !emailRegex.test(email.toLowerCase());
    if (!question || !nickname || invalidEmail) {
      const missingInputs = [];
      if (!question) {
        missingInputs.push('question');
      }
      if (!nickname) {
        missingInputs.push('nickname');
      }
      if (invalidEmail) {
        missingInputs.push('email');
      }
      setErrorMsg(`You must enter the following: ${missingInputs.join(', ')}`);
    } else {

      axios.post('/qa/questions', {
        body: question,
        name: nickname,
        email: email,
        // eslint-disable-next-line camelcase
        product_id: Number(productId)
      }).then((res) => {
        console.log(res.data);
        setIsSubmitted('Submitted');
      }).catch(err => {
        console.error(err);
        setIsSubmitted('ERROR');
      });
    }

  };
  return (
    <div className="modal-overlay qa-modal">
      <div className="modal qa-modal">
        <div className="modal-header qa-modal">
          <span className="modal-title qa-modal">Ask your Question</span>
          <span>About the {productName} </span>
          <button onClick={closeModal} className="reviewButton">Close</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-question qa-modal">
            <label className="qa-modal-warning">Items marked <i className="required">*</i> are required</label><br></br><br></br>
            <label><i className="required">*</i> Your Question:</label><br></br>
            <textarea
              className="modal-question-textarea qa-modal"
              value={question}
              type="text"
              onChange={e => {
                setQuestion(e.target.value);
                setErrorMsg('');
              }}></textarea>
          </div>
          <div className="qa-modal qa-nickname-container">
            <label><i className="required">*</i> What is your nickname?: </label><br></br>
            <input
              className="modal-question-nickname qa-modal"
              placeholder="Example: jackson11!"
              value={nickname}
              type="text"
              onChange={e => {
                setNickname(e.target.value);
                setErrorMsg('');
              }}></input>
          </div>
          <div>
            <label className="qa-modal-warning">For privacy reasons, do not use your full name or email address.</label><br></br>
            <label ><i className="required">*</i> Email: </label><br></br>
            <input
              className="modal-question-email qa-modal"
              placeholder="Why did you like the product or not?"
              value={email}
              type="text"
              onChange={e => {
                setEmail(e.target.value);
                setErrorMsg('');
              }}></input><br></br>
            <label className="qa-modal-warning">For authentication reasons. You will not be emailed.</label> <br></br>
          </div>
          <button className="qa-modal-submit reviewButton" type="submit" value="Submit">{isSubmitted}</button>
          {errorMsg && <div className="required">{errorMsg}</div>}
        </form>
      </div>
    </div>
  );
};

export default AddQuestionModal;