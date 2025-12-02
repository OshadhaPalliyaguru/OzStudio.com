import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OzGraphics from './pages/OzGraphics';
import OzSoft from './pages/OzSoft';
import OzWeb from './pages/OzWeb';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graphics" element={<OzGraphics />} />
        <Route path="/soft" element={<OzSoft />} />
        <Route path="/web" element={<OzWeb />} />
      </Routes>
    </Router>
  );
}

export default App;
