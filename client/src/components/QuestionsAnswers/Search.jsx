import React, {useState} from 'react';

const Search = ({questionData}) => {

  // [searchbar, setSearchbar] = useState('');

  // const handleChange = (e) => {
  //   let toLower =
  // };

  return (
    <form >
      <label>Have a question? </label>
      <input
        placeholder={'Search for answers...'}
        // value={searchbar}
      />
    </form>
  );
};

export default Search;