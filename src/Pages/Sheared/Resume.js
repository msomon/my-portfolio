import React from 'react';
import pdf from '../../image/SUMON_RESUME.pdf'
const Resume = () => {
  return (
    <div>
      {
        <img src={pdf} alt="" />
      }
    </div>
  );
};

export default Resume;