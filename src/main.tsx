import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './global-bg.css';  // 👈 añade esta línea

createRoot(document.getElementById("root")!).render(<App />);
