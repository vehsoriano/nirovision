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
        <Route path="/nirovision" index element={<Home />}>
        </Route>
        <Route path="/about" index element={<About />}>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
