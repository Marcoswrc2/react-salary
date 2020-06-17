import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

export default function InnputFullSalary(props) {
  const classes = useStyles();

  return (
    <TextField
      max='10'
      type='number'
      id='filled-basic'
      label='Salário Bruto'
      variant='outlined'
      defaultValue=''
      value={props.value}
      onChange={props.onChange}
      InputProps={{ className: classes.inputRegular }}
    />
  );
}
const useStyles = makeStyles({
  inputRegular: {
    fontWeight: 'bold',
    color: 'black',
  },
});
