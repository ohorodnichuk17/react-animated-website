import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
