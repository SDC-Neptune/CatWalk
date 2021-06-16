import React, {useState} from 'react';
import axios from 'axios';

const AddAnswerModal = ({ answerModalOpen, setAnswerModalOpen, questionData, productName}) => {

  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState('Submit');

  if (!answerModalOpen) {
    return null;
  }

  const closeModal = () => {
    setAnswerModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const invalidEmail = !email || !emailRegex.test(email.toLowerCase());
    if (!answer || !nickname || invalidEmail) {
      const missingInputs = [];
      if (!answer) {
        missingInputs.push('answer');
      }
      if (!nickname) {
        missingInputs.push('nickname');
      }
      if (invalidEmail) {
        missingInputs.push('email');
      }
      setErrorMsg(`You must enter the following: ${missingInputs.join(', ')}`);
    } else {
      axios.post(`/qa/questions/${questionData.question_id}/answers`, {
        body: answer,
        name: nickname,
        email: email,
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
          <span>Submit your Answer</span>
          <span>{productName} : {questionData.question_body}</span>
          <button onClick={closeModal} className="reviewButton">Close</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-answer qa-modal">
            <label className="qa-modal-warning">Items marked <i className="required">*</i> are required</label><br></br><br></br>
            <label><i className="required">*</i> Your Answer:</label><br></br>
            <textarea
              className="modal-question-textarea qa-modal"
              value={answer}
              type="text"
              onChange={e => {
                setAnswer(e.target.value);
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

export default AddAnswerModal;