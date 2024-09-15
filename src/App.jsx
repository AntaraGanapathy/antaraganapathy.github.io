import { BrowserRouter } from "react-router-dom";

import { Home, StarsCanvas, Navbar, About, Works } from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative bg-primary">
      <div className="relative z-0">
        <Navbar />
        <Home />
        <About />
        <Works />
        <StarsCanvas />
      </div>
      {/* <About /> */}
      {/* <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks /> */}
      {/* <div className="relative z-0">
        <p> oedmoido2</p>
        <Contact />
        <StarsCanvas />
      </div> */}
    </div>
    </BrowserRouter>
  )
}

export default App
