/**
 *
 * Details
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import './Details.css';
import { formRequest } from './actions';
import { Form } from '../Form';

import Logout from '../../components/Logout';
import HomeButton from '../../components/HomeButton';
import EmpDetails from '../../components/EmpDetails';
import UpdateButton from '../../components/UpdateButton';
import AddDetails from '../../components/AddDetails';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }
// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
export function Details({ details, onFormData }) {
  useInjectReducer({ key: 'details', reducer });
  useInjectSaga({ key: 'details', saga });

  const classes = useStyles();

  useEffect(() => {
    onFormData('Mahesh');
  }, []);

  useEffect(() => {
    console.log('calling data by props', details.formResponse);
  }, [details.formResponse]);

  return (
    <>
      <div className="btn-container">
        <Logout />
        <HomeButton />
        <EmpDetails />
        <AddDetails />
        <UpdateButton />
      </div>
      <div className="container">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Sl no</StyledTableCell>
                <StyledTableCell align="right">UserName</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Mobile Number</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {details.formResponse &&
                details.formResponse.map((row, index) => (
                  <StyledTableRow key={index + 1}>
                    <StyledTableCell align="center">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.username}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.mobileno}
                    </StyledTableCell>
                    {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

Form.prototype = {
  dispatch: PropTypes.func.isRequired,
  onFormData: PropTypes.func,
  details: PropTypes.array,
};

// Details.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  details: makeSelectDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onFormData: valueToPass => {
      console.log('Value to pass : ', valueToPass);
      dispatch(formRequest(valueToPass));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Details);
