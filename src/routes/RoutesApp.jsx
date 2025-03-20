import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Calculator from "../components/Calculator";
import Result from "../components/Result";

const allRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Calculator />}/>
                <Route path='/result' element={<Result />}/>
            </Routes>
        </Router>
    )
}

export default allRoutes;