/**
 *
 * UpdateButton
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

function UpdateButton() {
  const handleChange = () => {
    console.log('clicked on update button');
    browserRedirect('/empedit');
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button onClick={handleChange}>Update Details</Button>
    </div>
  );
}

UpdateButton.propTypes = {};

export default memo(UpdateButton);
