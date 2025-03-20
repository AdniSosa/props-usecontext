import { useCalculator } from "./CalculatorProvider";
import { Link } from 'react-router-dom';
import styles from './Calculator.module.css'

const Calculator = () => {
    const { selectedNumbers, currentNumber, addNumbers, resetCalculator } = useCalculator();

    const handleClick = (buttonValue) => {
        addNumbers(buttonValue)
        console.log(selectedNumbers)
    }

    return (
        <div className={styles.calculator}>
            {currentNumber &&
                <div className={styles.numbers}>
                    <h3>{selectedNumbers.join(' + ')}</h3>
                    <h2>Número actual: <span>{currentNumber}</span></h2>

                    <button className={styles.delete} onClick={() => resetCalculator()}>Borrar</button>
                </div>
            }

            {!currentNumber &&
                <h2>Haz click en los números para empezar a sumar</h2>
            }
            <div>
                <button onClick={() => handleClick(7)}>7</button>
                <button onClick={() => handleClick(8)}>8</button>
                <button onClick={() => handleClick(9)}>9</button>
            </div>
            <div>
                <button onClick={() => handleClick(4)}>4</button>
                <button onClick={() => handleClick(5)}>5</button>
                <button onClick={() => handleClick(6)}>6</button>
            </div>
            <div>
                <button onClick={() => handleClick(1)}>1</button>
                <button onClick={() => handleClick(2)}>2</button>
                <button onClick={() => handleClick(3)}>3</button>
            </div>

            <div className={styles.resultLink}>
                <Link to='/result' >Ver resultado</Link>
            </div>
        </div>
    )
}

export default Calculator;