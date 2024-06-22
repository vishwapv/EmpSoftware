/**
 *
 * LoginPage
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';

import './login.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '500px',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bullet: {
    display: 'flex',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const useStyles1 = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex',
      flexDirection: 'column',
    },
  },
}));

export function LoginPage() {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const classes1 = useStyles1();

  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });
  const [userData, setUserData] = useState('');

  const handleChange = e => {
    const { id, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [id]: value,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setUserData(formData);
    // You can also add any additional logic to handle the form submission here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="container">
      <Card className={classes.root} variant="outlined">
        <div className="form-container">
          <form className="form-body" onSubmit={handleSubmit}>
            <TextField
              id="userName"
              label="User Name"
              value={formData.userName}
              onChange={handleChange}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="btn">
              <Button variant="contained" color="primary" type="submit" on>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginPage);
