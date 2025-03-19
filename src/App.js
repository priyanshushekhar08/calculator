import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {




  // let num=8;


  let[num,setNum]=useState(0)



  let[num1,setNum1]=useState(0)
  let[num2,setNum2]=useState(0)
  let[operator,setOperator]=useState(null)




const handleNumClicked = (num) => {
  if(operator===null)
  {
   num1=num1*10+num;
    setNum1(num1);
    setNum(num1)
  }


  else{
    num2=num2*10+num;
    setNum2(num2);
    setNum(num2)
  }
  
};


const operatorClicked=(operator)=>{

 setOperator(operator)
 setNum(operator)
}


const handleEqualtoClicked=()=>{
  

  if(operator=='+')
  {
    let ans=num1+num2;
    setNum(ans)
    setNum1(0)
    setNum2(0)
  }


  else if(operator=='-')
    {
      let ans=num1-num2;
      setNum(ans)
      setNum1(0)
      setNum2(0)
    }

    else if(operator=='*')
      {
        let ans=num1*num2;
        setNum(ans)
        setNum1(0)
        setNum2(0)
      }

      else if(operator=='/')
        {
          let ans=num1/num2;
          setNum(ans)
          setNum1(0)
          setNum2(0)
        }

    
}





const handleClearButton=()=>{
  setNum(0);
  setNum1(0)
  setNum2(0)
  setOperator(null)

}


  
  return (
    <div className="App">
      <div className="calculator">
        
        
        <div className="display">
          <input type="text" placeholder={num} readOnly />
        </div>




        <div className="buttons">


          <div className="row">
            <button onClick={()=>{handleNumClicked(7)}}>7</button>
            <button onClick={()=>{handleNumClicked(8)}}>8</button>
            <button onClick={()=>{handleNumClicked(9)}}>9</button>
            <button onClick={()=>{operatorClicked('/')}} className="operator">/</button>
          </div>



          <div className="row">
            <button onClick={()=>{handleNumClicked(4)}}>4</button>
            <button onClick={()=>{handleNumClicked(5)}}>5</button>
            <button onClick={()=>{handleNumClicked(6)}}>6</button>
            <button onClick={()=>{operatorClicked('*')}} className="operator">*</button>
          </div>




          <div className="row">
            <button onClick={()=>{handleNumClicked(1)}}>1</button>
            <button onClick={()=>{handleNumClicked(2)}}>2</button>
            <button onClick={()=>{handleNumClicked(3)}}>3</button>
            <button onClick={()=>{operatorClicked('-')}}  className="operator">-</button>
          </div>




          <div className="row">
            <button onClick={()=>{handleNumClicked(0)}}>0</button>
            {/* <button>.</button> */}
            <button onClick={handleEqualtoClicked}  className="equals">=</button>
            <button onClick={()=>{operatorClicked('+')}} className="operator">+</button>
          </div>



          <div className="row">
            <button onClick={handleClearButton} className="clear">C</button>
          </div>




        </div>
      </div>
    </div>
  );
}

export default App;