import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewPics from './ReviewPics.jsx';

const NewReviewPopUp = ({props, handleChange, summaryData, productInfo}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [rec, setRec] = useState('');
  const [chars, setChars] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const [input, setInput] = useState('');
  const [body, setBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [currentSelect, setCurrentSelect] = useState('None Selected');
  const [pics, setPics] = useState([]);

  const key = {
    Fit: {
      1: 'Runs tight',
      2: 'Runs slightly tight',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    },
    Length: {
      1: 'Runs Short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long',
    },
    Comfort: {
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect',
    },
    Quality: {
      1: 'Poor',
      2: 'Below average',
      3: 'What I expected',
      4: 'Pretty great',
      5: 'Perfect',
    },
    Size: {
      1: 'A size too small',
      2: '½ a size too small',
      3: 'Perfect',
      4: '½ a size too big',
      5: 'A size too wide',
    },
    Width: {
      1: 'Too narrow',
      2: 'Slightly narrow',
      3: 'Perfect',
      4: 'Slightly wide',
      5: 'Too wide',
    }
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      //setPics([...pics, URL.createObjectURL(event.target.files[0])]);
    }
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const invalidEmail = !email || !emailRegex.test(email.toLowerCase());
    if (!input || !rating || invalidEmail || !nickname || (Object.keys(chars).length !== Object.keys(summaryData.characteristics).length) || body.length < 50 || rec === '') {
      let missingInputs = [];
      if (!input) {
        missingInputs.push('summary');
      }
      if (!nickname) {
        missingInputs.push('nickname');
      }
      if (invalidEmail) {
        missingInputs.push('email');
      }
      if (!rating) {
        missingInputs.push('rating');
      }
      if (Object.keys(chars).length !== Object.keys(summaryData.characteristics).length) {
        missingInputs.push('characteristics');
      }
      if (body.length < 50) {
        missingInputs.push('message body');
      }
      if (rec === '') {
        missingInputs.push('recommendation');
      }
      setErrorMsg(`You must enter the following: ${missingInputs.join(', ')}`);
    } else {
      axios.post('/reviews', {
        product_id: productInfo.id,
        rating: Number(rating),
        summary: input,
        photos: pics,
        body: body,
        recommend: rec,
        name: nickname,
        email: email,
        characteristics: chars,
      }).then((res) => {
        handleChange();
      }).catch(err => {
        console.error('I DID NOT WORK', err);
      });
    }};

  return (
    <div className='modal-overlay-newReview'>
    <button className='reviewButton' onClick={handleChange}>X</button>
      <div className='modal-newReview'>
        <div className='revTitleSection'>
        <div className='newReviewTitle'>Write Your Review</div>
        <div className='newAboutTitle'>About the {productInfo.name}</div>
        <div>
          {[...Array(5)].map((star, index) => {
            index += 1; //start at 1, since array is 0 indexed
            return (
              <button
                id='ratingNew'
                key={index}
                className={index <= (hover || rating) ? 'on' : 'off'}
                //hover is set to current place where mouse is hovering
                onClick={() => setRating(index)} //rating is not officially set until clicked
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              > ★ </button>
            );
          })}
        </div>
        <button className='reviewButton' id='newReviewSubmit' type='submit' onClick={handleSubmit}>Submit</button>
        {errorMsg && <div className='required'>{errorMsg}</div>}
        </div>
        <div className='allNewRev'>
        <div className='recProduct'>
          <span>Would you recommend this product?</span> <br/>
          <input type='radio' name='recommend' value='Yes' onClick={() => setRec(true)}/>
          <label>Yes</label>
          <input type='radio' name='recommend' value='No' onClick={() => setRec(false)}/>
          <label>No</label>
        </div><br/>
        <div className='currentSelect'>{currentSelect}</div>
        {!summaryData ? '' : Object.keys(summaryData.characteristics).map(item => {
          return (
            <div key={item} className='charList'>
              <span>{item}</span>
              <input type='radio' name={item} value='1' onClick={() => {
                setChars(() => {
                  let obj = {};
                  obj[summaryData.characteristics[item].id] = 1;
                  return {...chars, ...obj}
                });
                setCurrentSelect(key[item]['1']);
              }}/>
              <label>1</label>
              <input type='radio' name={item} value='2' onClick={() => {
                setChars(() => {
                  let obj = {};
                  obj[summaryData.characteristics[item].id] = 2;
                  return {...chars, ...obj}
                })
                setCurrentSelect(key[item]['2']);
              }}/>
              <label>2</label>
              <input type='radio' name={item} value='3' onClick={() => {
                setChars(() => {
                  let obj = {};
                  obj[summaryData.characteristics[item].id] = 3;
                  return {...chars, ...obj}
                });
                setCurrentSelect(key[item]['3']);
              }}/>
              <label>3</label>
              <input type='radio' name={item} value='4' onClick={() => {
                setChars(() => {
                  let obj = {};
                  obj[summaryData.characteristics[item].id] = 4;
                  return {...chars, ...obj}
                });
                setCurrentSelect(key[item]['4']);
              }}/>
              <label>4</label>
              <input type='radio' name={item} value='5' onClick={() => {
                setChars(() => {
                  let obj = {};
                  obj[summaryData.characteristics[item].id] = 5;
                  return {...chars, ...obj}
                });
                setCurrentSelect(key[item]['5']);
              }}/>
              <label>5</label>
            </div>
          );
        })} <br/>
        <form name='reviewFields'>
          <div className='revSummary'>
            <span>Title: </span>
            <input name='summary' type='text' maxLength='60' placeholder='Example: Best purchase ever!' required onChange={e => {
                setInput(e.target.value);
                setErrorMsg('');
              }}></input>
          </div>
          <div className='revBody'>
            <textarea name='body' type='text' maxLength='1000' placeholder='Why did you like the product or not?' required onChange={e => {
                setBody(e.target.value);
                setErrorMsg('');
              }}></textarea>
          </div>
          <div className='revFile'>
          {pics.length === 5 ? false : (<input type='file' onChange={onImageChange} className='filetype' multiple/>)}
          <div className='stackPics'>
            {pics.map(image => {
              return (
                <ReviewPics key={image} image={image}/>
              );
            })}
          </div>
          </div>
          <div className='revNickname'>
            <span>Nickname: </span>
            <input name='nickname' type='text' maxLength='60' placeholder='Example: jackson11!' required onChange={e => {
                setNickname(e.target.value);
                setErrorMsg('');
              }}></input>
          </div>
          <div className='revEmail'>
            <span>Email: </span>
            <input name='email' type='email' maxLength='60' placeholder='Example: jackson11@email.com' required onChange={e => {
                setEmail(e.target.value);
                setErrorMsg('');
              }}></input><br/>
            <span className='auth'>For authentication reasons, you will not be emailed</span>
          </div>
          <br></br>
       </form>
       </div>
      </div>
    </div>
  );
};

export default NewReviewPopUp;
