import { Route, Routes } from "react-router-dom"
import Reg_form from "./components/Reg_form.jsx"
import Submit from "./components/Submit.jsx"

function App() {

  return (
    <>
    {/* <Reg_form/> */}
    <Routes>
      <Route path="/" element={<Reg_form/>}/>
      <Route path="/submit" element={<Submit/>}/>
    </Routes>
    </>
  )
}

export default App
