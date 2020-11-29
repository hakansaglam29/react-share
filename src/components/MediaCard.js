import React from "react";
import {useHistory} from "react-router-dom"
import PropTypes from "prop-types"

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root:{
    textOverflow:'ellipsis',
  },
  media: {
    height: 300,
  },
  name: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }

});

export function MediaCard({ userImage, userName, userEmail, id }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => history.push(`/user/${id}`)}>
        <CardMedia className={classes.media} image={userImage} />
        <CardContent>
          <Typography className={classes.name} gutterBottom variant="h6" component="h2">
            {userName}
          </Typography>
          <Typography  className={classes.name} variant="body2" color="textSecondary" component="p">
            {userEmail}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Full Profile
        </Button>
        <Button size="small" color="primary">
          View User Posts
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
    id: PropTypes.string.isRequired,
    userImage: PropTypes.string,
    userName: PropTypes.string,
    userEmail: PropTypes.string,
}