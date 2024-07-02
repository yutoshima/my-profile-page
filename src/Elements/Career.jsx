import React from 'react';
import {careerData} from '../Data/careerData'; 

const Career = () => {
  return (
    <table>
      {careerData.map((item, index) => (
        <tr key={index}>
          <td>{item.year}年</td>
          <td>{item.date}月</td>
          <td>{item.content}</td>
        </tr>
      ))}
    </table>
  );
}

export default Career;
