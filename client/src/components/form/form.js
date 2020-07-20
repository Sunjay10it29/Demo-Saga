import React from "react";
import { Container, TextField, Typography, Divider } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  heading:{
    fontFamily: "font-family-sans-serif",
    margin: "auto",
    backgroundColor: "lavender"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(5)
  },
  textField: {
    flexBasis: 200,
    margin: '0 auto',
    padding: '0 0 2.5rem',
    width: '32.5rem'
  }
}));
const Form = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <div>
          <Typography variant="h6" gutterBottom className={classes.heading}>
            Search Articles
          </Typography>
          <Divider
            style={{
              width: "33%",
              margin: "auto",
              marginTop: "1em",
              marginBottom: "1em"
            }}
          />
        </div>
        <form onSubmit={props.onSubmit}>
          <div className={classes.root}>
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <TextField
                label="Topic"
                value={props.query}
                inputProps={{
                  name: "topic",
                  id: "topicInput"
                }}
                onChange={event => props.topicHandler(event)}
                placeholder="Enter your search query..."
              />
              {props.error ? (
                <Typography
                  style={{ color: "red" }}
                  variant="caption"
                  display="block"
                  gutterBottom
                >
                  Invalid Character Detected
                </Typography>
              ) : null}
            </FormControl>
          </div>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default Form;
