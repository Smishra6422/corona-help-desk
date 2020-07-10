import React from "react";
import Header from "./component/header/header.component";
import SymptomCard from "./component/symptom/symptom.component";
import PrecautionCard from "./component/precaution/precaution.component";
import WorldDataCard from "./component/global-data/global.component";
import Homepage from "./component/homepage/homepage.component";
import FooterPage from "./component/footer/footer.component";
import ParallaxIntro from "./component/aboutus/aboutUs.component";

import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/symptom" component={SymptomCard} />
        <Route exact path="/precaution" component={PrecautionCard} />
        <Route exact path="/world" component={WorldDataCard} />
        <Route exact path="/about" component={ParallaxIntro} />
      </Switch>
      <FooterPage />
    </div>
  );
}

// import React from 'react';

// export default CardExample;
export default App;
