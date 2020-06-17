import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';

export default function InputReadOnly(props) {
  const classes = useStyles();
  return (
    <TextField
      className='input-text'
      max='10'
      type='number'
      id='filled-basic'
      label={props.placeholder}
      variant='outlined'
      value={props.value}
      onChange={props.onChange}
      readOnly
      className={classes.textField}
      InputLabelProps={{ className: classes.inputLabel }}
      InputProps={{
        className: props.descINSS
          ? classes.inputINSS
          : props.descIR
          ? classes.inputIR
          : props.liquid
          ? classes.inputLiquid
          : props.regular
          ? classes.inputRegular
          : null,
      }}
    />
  );
}
const useStyles = makeStyles({
  textField: {
    marginTop: 10,
  },
  inputRegular: {
    fontWeight: 'bold',
    color: 'black',
  },
  inputINSS: {
    fontWeight: 'bold',
    color: '#E67E21',
  },
  inputIR: {
    fontWeight: 'bold',
    color: '#BF392B',
  },
  inputLiquid: {
    fontWeight: 'bold',
    color: '#27A085',
  },
  inputLabel: {
    color: 'black',
    fontWeight: 'red',
  },
});
