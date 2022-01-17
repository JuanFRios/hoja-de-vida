import 'styles/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from 'pages/index';
import PublicLayout from 'layouts/PublicLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route path='' element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
