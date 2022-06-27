import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout/Layout";

const FinalForm = lazy(() => import("./FinalForm"));
const Form = lazy(() => import("./Form"));

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="final-form" element={<FinalForm />} />
          <Route path="form" element={<Form />} />
          <Route path="*" element={<Layout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
