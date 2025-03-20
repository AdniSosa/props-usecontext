import { useCalculator } from "./CalculatorProvider";
import { Link } from "react-router-dom";
import styles from './Result.module.css'

const Result = () => {
    const {selectNumbers, addNumbers, sum} = useCalculator();
    
    
    return (
        <div className={styles.sum}>
            <h2>Resultado suma: <span>{sum}</span></h2>
            
            {!sum &&
            <h2>0</h2>
            }
            
            <Link to='/'>Calculadora</Link>
        </div>

    )
}

export default Result;