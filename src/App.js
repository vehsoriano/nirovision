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
        <Route path="/nirovision" element={<Home />}>
          <Route path="/nirovision/about" element={<About />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
