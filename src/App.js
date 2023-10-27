import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewAllDeals from "./pages/ViewAllDeals";
import ItemDetails from "./ItemDetails";
import Login from "./pages/Login";
import SignUp from "./SignUp";
import Protected from './Protected';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignUp" element={<SignUp />} />
         <Route path="/Login" element={<Login />} />
        <Route path="/viewall" element={<Protected Cmp={ViewAllDeals} />} /> 
        <Route path="/viewall/detail/:id" element={<Protected Cmp={ItemDetails}/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
