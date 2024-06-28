/**
 *
 * Buttons
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export function Buttons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button>Home</Button>
      <Button>Employee list</Button>
      <Button>Update</Button>
      <Button>Logout</Button>
    </div>
  );
}

Buttons.propTypes = {};

export default memo(Buttons);
