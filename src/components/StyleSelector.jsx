import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function StyleSelector({ styles, setStyleIndex, styleIndex }) {
  return (
    <div className="row style-selector">
      {styles.map((style, index) => {
        return (
          <div 
            className={"ajs-style-btn rounded-circle col-3 " + (style.style_id === styles[styleIndex].style_id ? "ajs-style-btn" : "")} 
            key={style.style_id} 
            onClick={() => setStyleIndex(index)}
          >
            <Avatar src={style.photos[0].thumbnail_url} alt={style.name} />
          </div>
        );
      })}
    </div>
  );
}

export default StyleSelector;
