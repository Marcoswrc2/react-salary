import React, { Component } from 'react';
import { calcSalary, descIRPF, descPrev } from './helpers/calcSalary';
import './app.css';
import Input from '@material-ui/core/Input';
import InputSalary from './components/inputFullSalary';
import InputReadOnly from './components/inputReadOnly';
import { Button } from '@material-ui/core';
import ProgressBar from './components/ProgressBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullSalary: null,
      teste: '',
    };
  }
  componentDidMount() {}

  handleInput = (e) => {
    let salary = parseFloat(e.target.value);
    if (salary) {
      this.setState({ fullSalary: salary });
    } else {
      this.setState({ fullSalary: 0 });
    }
  };

  render() {
    const { fullSalary } = this.state;
    var pINSS = 0;
    var pIR = 0;
    var pLiquid = 0;
    if (fullSalary > 0) {
      var baseINSS = this.state.fullSalary;
      var liquid = calcSalary(this.state.fullSalary);
      var descINSS = descPrev(baseINSS).toFixed(2);
      var baseIR = (baseINSS - parseFloat(descINSS)).toFixed(2);
      var descIR = descIRPF(parseFloat(baseIR)).toFixed(2);

      pINSS = (parseFloat(descINSS) / baseINSS) * 100;
      pIR = (parseFloat(descIR) / baseINSS) * 100;
      pLiquid = (liquid / baseINSS) * 100;
    }

    return (
      <div className='container'>
        <div className='boxCalculate'>
          <h1 className='title'>React Salário</h1>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
              <InputSalary onChange={this.handleInput} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
              <InputReadOnly regular placeholder='Base INSS' value={baseINSS ? baseINSS.toFixed(2) : '0'} />
              <InputReadOnly descINSS placeholder='Desconto INSS' value={descINSS ? descINSS : '0'} />
              <InputReadOnly regular placeholder='Base IRPF' value={baseIR ? baseIR : '0'} />
              <InputReadOnly descIR placeholder='Desconto IRPF' value={descIR ? descIR : '0'} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 30, justifyContent: 'center' }}>
              <InputReadOnly liquid placeholder='Salário Líquido' value={liquid ? liquid.toFixed(2) : '0'} />
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: 40,
                width: '100%',
              }}
            >
              <ProgressBar
                percentage3={parseFloat(pINSS.toFixed(2))}
                percentage2={parseFloat(pIR.toFixed(2))}
                percentage1={parseFloat(pLiquid.toFixed(2))}
              />
            </div>
          </div>
          {/* <p>O salário restante é : {calcSalary(2110)}</p> */}
        </div>
      </div>
    );
  }
}
