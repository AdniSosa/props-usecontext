import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [sum, setSum] = useState(null)

  const addNumbers = (numberInput) => {
    if (numberInput) {
      setCurrentNumber(numberInput)

      setSelectedNumbers((numbers) => {
        const updatedNumbers = [...numbers, numberInput];
        
        const newSum = updatedNumbers.reduce((acc, curr) => acc + curr, 0);
        setSum(newSum);
        
        return updatedNumbers;
      });

    }
  }

  const resetCalculator = () => {
    setSelectedNumbers([]);
    setCurrentNumber(null);
    setSum('');
  };

  return (
    <CalculatorContext.Provider value={{ selectedNumbers, currentNumber, addNumbers, resetCalculator, sum }}>
      {children}
    </CalculatorContext.Provider>
  )
}

export const useCalculator = () => useContext(CalculatorContext);