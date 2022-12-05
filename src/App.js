import MainLayout from './layout/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <ProjectsSection />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
