import React, {useState} from 'react';

const AddAnswerModal = ({ answerModalOpen, setAnswerModalOpen, questionData, productName}) => {

  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  if (!answerModalOpen) {
    return null;
  }

  const closeModal = () => {
    setAnswerModalOpen(false);
  };
  // const getQuestion = () => {
  //   var questionBody = document.getElementById(questionData.question_body);
  //   console.log(questionBody);
  // };
  const handleSubmit = (e) => {
    axios.post('/qa/questions', {
      body: question,
      name: nickname,
      email: email,
    }).then((res) => {
      console.log(res.data);
    }).catch(err => {
      console.error(err);
    });
  };
  return (
    <div className="modal-overlay qa-modal">
      <div className="modal qa-modal">
        <div className="modal-header qa-modal">
          <span>Submit your Answer</span>
          <span>PRODUCT_NAME : QUESTION_BODY</span>
          <button onClick={closeModal} className="reviewButton">Close</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-answer qa-modal">
            <label className="qa-modal-warning">Items marked <i className="required">*</i> are required</label><br></br><br></br>
            <label><i className="required">*</i> Your Answer:</label><br></br>
            <textarea
              required
              className="modal-question-textarea qa-modal"
              value={answer}
              type="text"
              onChange={e => setAnswer(e.target.value)}></textarea>
          </div>
          <div className="qa-modal qa-nickname-container">
            <label><i className="required">*</i> What is your nickname?: </label><br></br>
            <input
              required
              className="modal-question-nickname qa-modal"
              placeholder="Example: jackson11!"
              value={nickname}
              type="text"
              onChange={e => setNickname(e.target.value)}></input>
          </div>
          <div>
            <label className="qa-modal-warning">For privacy reasons, do not use your full name or email address.</label><br></br>
            <label ><i className="required">*</i> Email: </label><br></br>
            <input
              required
              className="modal-question-email qa-modal"
              placeholder="Why did you like the product or not?"
              value={email}
              type="text"
              onChange={e => setEmail(e.target.value)}></input><br></br>
            <label className="qa-modal-warning">For authentication reasons. You will not be emailed.</label> <br></br>
          </div>
          <button className="qa-modal-submit reviewButton" type="submit" value="Submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddAnswerModal;