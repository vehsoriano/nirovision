import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from '../src/pages/Home';
import About from '../src/pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="about" index element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
