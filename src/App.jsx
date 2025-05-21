
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard'
import Setting from './pages/Setting' 
function App() {


  return (
    <Router>
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </div>
  </Router>
    
    
  )
}

export default App
