import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Header from "./components/Header";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <body>
      <Header />
      <Catalog />
      <Footer />
    </body>
  );
}

export default App;
