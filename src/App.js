import HomePage from "./pages/HomePage";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewAllDeals from "./pages/ViewAllDeals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/viewall" element={<ViewAllDeals />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
