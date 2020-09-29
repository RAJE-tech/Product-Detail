import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function StyleSelector({ styles, setStyleIndex, styleIndex }) {
  const classes = useStyles();

  return (
    <div className="row ajs-style-selector">
      {styles.map((style, index) => {
        return (
          <div key={style.style_id} className="col-sm-3 col-4 ajs-style-btn">
            <Badge
              badgeContent="✓"
              color="primary"
              overlap="circle"
              invisible={style.style_id !== styles[styleIndex].style_id}
            >
              <Avatar
                className={classes.large}
                onClick={() => setStyleIndex(index)}
                src={style.photos[0].thumbnail_url}
                alt={style.name}
              />
            </Badge>
          </div>
        );
      })}
    </div>
  );
}

export default StyleSelector;
