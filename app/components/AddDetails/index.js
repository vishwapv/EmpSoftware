/**
 *
 * AddDetails
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { browserRedirect } from '../../helpers/helpers';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function AddDetails() {
  const handleChange = () =>{
    console.log("clicked on update button")
    browserRedirect('/form');
  
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Button onClick={handleChange}>Add Details</Button>
  </div>
  );
}

AddDetails.propTypes = {};

export default memo(AddDetails);
