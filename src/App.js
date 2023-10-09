import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './Layout';




function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* <Route path="/admin/bar" element={<PrivateCab  />} /> */}
            </Route>

            {/* <Route path="/admin/" element={<LayoutAdmin />}>
                <Route index element={<AllOrdersAdmin />} /> 
                <Route path="/admin/bar" element={<PrivateCab  />} />
            </Route> */}
            
        </Routes>
        </BrowserRouter>
     </> 
  );
}

export default App;
