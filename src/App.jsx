import { HashRouter } from "react-router-dom";

import { Home, Navbar, About, Projects, Research, Footer } from './components';

const App = () => {
  return (
    <HashRouter>
      <div className="relative bg-primary">
        <div className="relative z-0">
          <Navbar />
          <Home />
          <div className="bg-primary">
            <About />
            <Projects />
            <Research />
            <Footer />
          </div>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
