export function descPrev(salarioBruto) {
  let first = null;
  let second = null;
  let third = null;
  let fourth = null;

  // if (salarioBruto < 1045) {
  //   return 0;
  // }
  if (salarioBruto <= 1045) {
    return salarioBruto * 0.075;
  }
  if (1045.01 <= salarioBruto && salarioBruto <= 2089.6) {
    first = 1045 * 0.075;
    second = (salarioBruto - 1045) * 0.09;
    return first + second;
  }
  if (2089.61 <= salarioBruto && salarioBruto <= 3134.4) {
    first = 1045 * 0.075;
    second = (2089.6 - 1045) * 0.09;
    third = (salarioBruto - 2089.6) * 0.12;

    return first + second + third;
  }
  if (3134.41 <= salarioBruto && salarioBruto <= 6101.06) {
    first = 1045 * 0.075;
    second = (2089.6 - 1045) * 0.09;
    third = (3134.4 - 2089.6) * 0.12;
    fourth = (salarioBruto - 3134.4) * 0.14;
    return first + second + third + fourth;
  }
  if (salarioBruto > 6101.06) {
    return 713.1;
  }
}

export function descIRPF(base) {
  if (base <= 1903.98) {
    return 0;
  }
  if (1903.98 <= base && base <= 2826.65) {
    return base * 0.075 - 142.8;
  }
  if (2826.66 <= base && base <= 3751.05) {
    return base * 0.15 - 354.8;
  }
  if (3751.06 <= base && base <= 4664.68) {
    return base * 0.225 - 636.13;
  }
  if (4664.69 <= base) {
    return base * 0.275 - 869.36;
  }
}

export function calcSalary(base) {
  if (base >= 0) {
    let baseINSS = base;
    let descINSS = parseFloat(descPrev(baseINSS).toFixed(2));
    let baseIRPF = baseINSS - descINSS;
    let descIR = parseFloat(descIRPF(baseIRPF).toFixed(2));
    let liquid = parseFloat((baseIRPF - descIR).toFixed(2));

    return liquid;
  } else {
    return 0;
  }
}
