import React from 'react';
/* eslint-disable react/prop-types */
const AdminOrderCard = ({ order }) => {
  const { price, name, img } = order;
  return (
    <div>
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/2 ...">t</th>
            <th className="w-1/4 ...">t</th>
            <th className="w-1/4 ...">t</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intro to CSS</td>
            <td>Adam</td>
            <td>858</td>
          </tr>
          <tr className="bg-blue-200">
            <td>
              A Long and Winding Tour of the History of UI Frameworks and Tools
              and the Impact on Design
            </td>
            <td>Adam</td>
            <td>112</td>
          </tr>
          <tr>
            <td>Intro to JavaScript</td>
            <td>Chris</td>
            <td>1,280</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrderCard;
