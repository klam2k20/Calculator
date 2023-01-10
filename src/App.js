import {useState, useEffect} from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Display from './components/Display';
import Button from './components/Button';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");
  const [equal, setEqual] = useState(false);

  useEffect(() => {
    console.log(`INPUT: ${input}`);
    console.log(`OP: ${operator}`);
    console.log(`RES: ${result}\n`);
  }, [input, result, operator]);

  const inputHandler = (e) => {
    const number = e.target.innerText;
    setEqual(false);
    if(equal) setResult('');
    if(number === '.') {
      setInput((pre) => pre.includes('.') ? 
                                      pre : 
                                      pre ? 
                                        pre.concat('.') : 
                                        '0.');
    } else {
      setInput((pre) => {
        if(pre==='0' && number==='0') {
          return pre;
        } else if(pre!=='0') {
          return pre + number;
        } else {
          return number;
        }
      });
    }
  }
  
  const operatorHandler = (e) => {
    const op = e.target.innerText;
    setEqual(false);
    if(!input) {
      setOperator(op);
      return;
    }
    else if(!result) {
      setResult(input);
      setInput('');
    } else {
      equalHandler();
    }
    setOperator(op);
  }

  const equalHandler = (e) => {
    if(e?.target.innerText === '=') {
      setEqual(true);
    }
    let calc;
    switch (operator) {
      case '÷':
        calc = String(parseFloat(result) / parseFloat(input));
        break;
      case 'x':
        calc = String(parseFloat(result) * parseFloat(input));
        break;
      case '-':
        calc = String(parseFloat(result) - parseFloat(input));
        break;
      case '+':
        calc = String(parseFloat(result) + parseFloat(input));
        break;
      default:
        return
    }
    setResult(calc);
    setInput('');
    setOperator('');
  }

  const clearHandler = () => {
    setInput('');
    setResult('');
    setOperator('');
  }

  const invertHandler = () => {

  }

  const percentHandler = () => {

  }

  return (
    <div className="App">
      <Wrapper>
        <Display value={input ? input : result ? result : '0'}/>
        <Button className='btn light-grey' value='C' onClick={clearHandler}/>
        <Button className='btn light-grey' value='+/-' onClick={invertHandler}/>
        <Button className='btn light-grey' value='%' onClick={percentHandler}/>
        <Button className='btn orange' value='÷' onClick={operatorHandler}/>
        <Button className='btn' value='7' onClick={inputHandler}/>
        <Button className='btn' value='8' onClick={inputHandler}/>
        <Button className='btn' value='9' onClick={inputHandler}/>
        <Button className='btn orange' value='x' onClick={operatorHandler}/>
        <Button className='btn' value='4' onClick={inputHandler}/>
        <Button className='btn' value='5' onClick={inputHandler}/>
        <Button className='btn' value='6' onClick={inputHandler}/>
        <Button className='btn orange' value='-' onClick={operatorHandler}/>
        <Button className='btn' value='1' onClick={inputHandler}/>
        <Button className='btn' value='2' onClick={inputHandler}/>
        <Button className='btn' value='3' onClick={inputHandler}/>
        <Button className='btn orange' value='+' onClick={operatorHandler}/>
        <Button className='btn zero' value='0' onClick={(inputHandler)}/>
        <Button className='btn' value='.' onClick={inputHandler}/>
        <Button className='btn orange' value='=' onClick={equalHandler}/>
      </Wrapper>
    </div>
  );
}

export default App;
