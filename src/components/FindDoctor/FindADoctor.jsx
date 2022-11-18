/* eslint-disable react/jsx-no-undef */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindADoctor = () => {
  // eslint-disable-next-line no-unused-vars
  const navegat = useNavigate();
  const [Physio, setphysio] = useState('');
  function handleSubmit(even) {
    const { value } = even.target;
    setphysio(value);
  }

  function handleClick() {
    if (Physio === 'phy') {
      navegat('/article');
    }
  }
  return (
    <div className="cont3">
      <select
        name="type"
        id="type"
        onChange={handleSubmit}
      >
        <option value="phy">Physioterapy</option>
        <option value="Ort">Orthopedic</option>
        <option value="Neu">Neurology</option>
      </select>
      <button id="submit" type="submit" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default FindADoctor;
