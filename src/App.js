import MainLayout from './layout/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
