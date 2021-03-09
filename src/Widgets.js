import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('PAPA React is Back', 'Top news - 9099 readers.')}
      {newsArticle('Coronavirus: US updates', 'Top news - 2035 readers.')}
      {newsArticle('Tesla hits new highs', 'Cars & auto - 300 readers.')}
      {newsArticle('Bitcoin breaks $54k', 'Crypto - 4205 readers.')}
      {newsArticle('Is Redux too good', 'Code - 123 readers.')}
      {newsArticle('Darton is learning React', 'Top news - 24 readers.')}
    </div>
  );
}

export default Widgets;
