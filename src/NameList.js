// NameList.js
import React from 'react';

const NameList = ({ names }) => {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

export default NameList;
