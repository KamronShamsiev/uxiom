import MainLayout from './layout/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeadingSection from './components/HeadingSection/HeadingSection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HeadingSection />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
