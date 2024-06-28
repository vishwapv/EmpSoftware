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

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Logout() {
  const classes = useStyles();
  return (
    <div className="container">
      <div className={classes.root}>
        <Button>Logout</Button>
      </div>
    </div>
  );
}

Logout.propTypes = {};

export default memo(Logout);
