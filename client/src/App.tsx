import React from 'react';
import './scss/App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Import data dictionaries
import { appDictionary } from './lib/dictionary'

import DndClasses from './components/dndClasses/dndClasses';
import RaceSelectionForm from './components/raceForm/raceForm';
import AsiGenerator from './components/abilityScores/asiGenerator';
import CharDescription from './components/descript/descript';
import SpellsSelector from './components/spells/spells';
import Feats from './components/feats/feats';

function NavBar() {
  return (
    <div>
      <div>This is what we have so far:</div>
      <div><a href="/setup">Choose a Race</a></div>
      <div><a href="/asi">Set Ability Scores</a></div>
      <div><a href="">Choose a Class</a></div>
      <div><a href="/description">Description</a></div>
      <div><a href="/spells">Spells</a></div>
      <div><a href="/feats">Feats</a></div>
    </div>
  );
}

function Home() {
  return(
    <div>
      Home.
    </div>
  )
}

{/* The `Setup` component is the form and actions for creating the character
  it is responsible for displaying the form as the attributes are being chosen.

  When a form has been submitted in completion we will pass the user data to another 
  component to handle persistence. (TBD datastore)

 */}
class Setup extends React.Component {

  constructor(props: any) {

    super(props);
  }

  render() {
    return (
      <div id="race`form">
        <RaceSelectionForm />
      </div>
    );
  }
}

function App() {
  return (

    <Router>
    
      <div className="navbar">
        <NavBar />
      </div>
    
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/setup" >
          <div className="container setup">
            <Setup />
          </div>
        </Route>

        <Route path="/asi" >
          <div className="container asi">
            <AsiGenerator />
          </div>
        </Route>

        <Route path="/description" >
          <div className="container descript">
            {/* <CharDescription /> */}
          </div>
        </Route>

        <Route path="/spells" >
          <div className="container spells">
            <SpellsSelector />
          </div>
        </Route>
        
        <Route path="/feats" >
          <div className="container">
            <Feats feats={appDictionary.FEAT_DATA} />
          </div>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;