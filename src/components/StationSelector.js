import React from 'react';
import '../App.css';

const StationSelector = ({ selectedLine, onLineChange }) => {
  return (
    <div className='ddl_rosen'>
      <label htmlFor="line-select">路線:</label>
      <select id="line-select" value={selectedLine} onChange={onLineChange}>
        <option value="山手線">山手線</option>
        <option value="銀座線">銀座線</option>
        <option value="丸ノ内線">丸ノ内線</option>
        <option value="日比谷線">日比谷線</option>
        <option value="東西線">東西線</option>
        <option value="千代田線">千代田線</option>
        <option value="有楽町線">有楽町線</option>
        <option value="半蔵門線">半蔵門線</option>
        <option value="南北線">南北線</option>
        <option value="副都心線">副都心線</option>
        <option value="御堂筋線">御堂筋線</option>
      </select>
    </div>
  );
};

export default StationSelector;