import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Films from "./pages/Films";
import Error from "./pages/Error"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/films" element={<Films />} />
        <Route path="/" element={<Navigate to="/films" />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  );
}

export default App;
