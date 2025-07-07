import { Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";
import CirclePages from "../Circle/CirclePages";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";
  
  return (
    <div className="app-container">
      {/* نمایش عناوین فقط در صفحه اصلی */}
      {isHomePage && (
        <>
          <h1 className="t1">My projects</h1>
          <p className="p1">«توضیحات شما...»</p>
        </>
      )}
      
      <Routes>
        <Route path="/*" element={<CirclePages />} />
      </Routes>
    </div>
  );
}

export default App;