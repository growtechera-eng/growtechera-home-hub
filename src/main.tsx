import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

//createRoot(document.getElementById("root")!).render(<App />);

import { AuthProvider } from "./context/AuthContext"; // import provider

createRoot(document.getElementById("root")!).render(
  
    <AuthProvider>
      <App />
    </AuthProvider>
 
);

