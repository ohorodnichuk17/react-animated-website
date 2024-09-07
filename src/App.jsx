import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import ArticleDetailPage from "./pages/ArticleDetailPage.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/article/:id" element={<ArticleDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
