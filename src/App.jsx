import { Route, Routes } from 'react-router-dom';
import './styles/main.css';

import Home from './pages/Home/Home';
import Lesgo from './pages/design/Lesgo';
import Zenlife from './pages/design/Zenlife';
import Grinpath from './pages/design/Grinpath';
import Matthewctfuller from './pages/end-to-end/Matthewctfuller';
import Klearlabs from './pages/end-to-end/Klearlabs';
import Legal from './pages/Legal/Legal';
import NotFound from './pages/NotFound';

import useGoatCounter from './utils/useGoatCounter';

export default function App() {
  useGoatCounter();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design/lesgo" element={<Lesgo />} />
        <Route path="/design/zenlife" element={<Zenlife />} />
        <Route path="/design/grinpath" element={<Grinpath />} />
        <Route
          path="/end-to-end/matthewctfuller"
          element={<Matthewctfuller />}
        />
        <Route path="/end-to-end/klear-labs" element={<Klearlabs />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
