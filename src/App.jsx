import { BrowserRouter } from "react-router-dom";

import { Home, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        {/* <Navbar /> */}
        <Home />
        <StarsCanvas />
      </div>
      {/* <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div> */}
    </div>
    </BrowserRouter>
  )
}

export default App
