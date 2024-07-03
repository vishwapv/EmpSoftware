/**
 *
 * HomeButton
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import messages from './messages';
import { browserRedirect } from '../../helpers/helpers';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function HomeButton() {
  const handleChange = () => {
    console.log('clicked on home page');
    browserRedirect('/dashboard');
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button onClick={handleChange}>Home</Button>
    </div>
  );
}

HomeButton.propTypes = {};

export default memo(HomeButton);
