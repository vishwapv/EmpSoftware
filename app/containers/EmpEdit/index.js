/**
 *
 * EmpEdit
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectEmpEdit from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// import TextField from '@material-ui/core/TextField';

import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import Checkbox from '@material-ui/core/Checkbox';

import IconButton from '@material-ui/core/IconButton';

import Logout from '../../components/Logout';
import HomeButton from '../../components/HomeButton';
import EmpDetails from '../../components/EmpDetails';
import UpdateButton from '../../components/UpdateButton';
import AddDetails from '../../components/AddDetails'

import './styles.css';

import { formRequest } from './actions';

import Buttons from '../../components/Buttons';

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

const useStyles2 = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const useStyles3 = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const useStyles4 = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export function Form({ formRes, onFormData }) {
  useInjectReducer({ key: 'form', reducer });
  useInjectSaga({ key: 'form', saga });

  // useEffect(() => {
  //   onFormData('Mahesh');
  // }, [onFormData]);

  // useEffect(() => {
  //   // Wrap the payload in an object
  //   onFormData({ query: 'Vishwas' });
  // }, []);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const classes1 = useStyles1();

  const classes2 = useStyles2();

  const classes3 = useStyles3();

  const classes4 = useStyles4();

  const [formData, setFormData] = useState({
    username: '',
    update: {
        $set: {
            email: "",
            mobileno: ""
        }
    }
  });

  const [userData, setUserData] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'username') {
      setFormData(prevState => ({
        ...prevState,
        [id]: value
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        update: {
          $set: {
            ...prevState.update.$set,
            [id]: value
          }
        }
      }));
    }
  };

  //  const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   console.log('Event Target ID:', id);
  //   console.log('Event Target Value:', value);

  //   if (id === 'username') {
  //     setFormData(prevState => {
  //       const newState = {
  //         ...prevState,
  //         [id]: value
  //       };
  //       console.log('New State for Username:', newState);
  //       return newState;
  //     });
  //   } else {
  //     setFormData(prevState => {
  //       const newState = {
  //         ...prevState,
  //         update: {
  //           $set: {
  //             ...prevState.update.$set,
  //             [id]: value
  //           }
  //         }
  //       };
  //       console.log('New State for Update:', newState);
  //       return newState;
  //     });
  //   }
  // };
  const handleSubmit = e => {
    e.preventDefault();
    setUserData(formData);
    onFormData(formData)
    console.log(e);
    console.log('Final data :', userData);
    console.log('clicked on form', formData);
  };

  return (
    <>
    
    <div className='btn-container'>
      <Logout />
      <HomeButton />
      <EmpDetails />
      <AddDetails/>
      <UpdateButton />

    </div>
    <div className="container">
      <h3>Employee List</h3>
      <Card className={classes.root} variant="outlined">
        <div className="form-container">
          <form
            className="form-body"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              id="username"
              label="Name"
              value={formData.username}
              onChange={handleChange}
            />
            <TextField
              id="email"
              label="Email"
              value={formData.update.$set.email}
              onChange={handleChange}
            />
            <TextField
              id="mobileno"
              label="Mobile no."
              value={formData.update.$set.mobileno}
              onChange={handleChange}
            />
            <div className="btn">
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </Card>
    </div>
    </>
  );
}

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
  formRes: PropTypes.func,
  onFormData: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  empEdit: makeSelectEmpEdit(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onFormData: valueToPass => {
      console.log('Value to pass: ', valueToPass);
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
)(Form);
