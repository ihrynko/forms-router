import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

const FinalForm = lazy(() => import("./FinalForm"));
const Form = lazy(() => import("./Form"));

function App() {
  return (
    <>
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
