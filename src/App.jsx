import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Website from "./pages/Website";
import { Suspense } from "react";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Website />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
