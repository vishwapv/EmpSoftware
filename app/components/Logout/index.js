/**
 *
 * Logout
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { browserRedirect } from '../../helpers/helpers';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Logout() {
  //  localStorage.removeItem('user');
  //  localStorage.removeItem('token');
  //  localStorage.clear();

  const handleChange = () =>{
    console.log("Clicked on logout")
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.clear();
    browserRedirect('/sessions');
  
  }
  const classes = useStyles();
  return (

      <div className={classes.root}>
        <Button onClick={handleChange}>Logout</Button>
    </div>
      
  );
}

Logout.propTypes = {};

export default memo(Logout);
