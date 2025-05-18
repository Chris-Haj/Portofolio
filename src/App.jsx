// App.jsx
import Home from './pages/Home'  // Changed from Main to Home

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* other routes */}
    </Routes>
  )
}