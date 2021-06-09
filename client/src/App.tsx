import React from 'react'
import './scss/App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/nav'
import Classes from './components/classes/classes'
import RaceSelectionForm from './components/races/race-form'
import AsiGenerator from './components/ability-scores/asi-generator'
import CharDescription from './components/descript/descript'
import SpellsSelector from './components/spells/spells'
import Feats from './components/feats/feats'

import { ApolloProvider } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client'

import { LinkType } from './lib/types'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
})

const links: LinkType[] = [
  {
    link: '/races',
    text: '1. Race',
  },
  {
    link: '/asi',
    text: '2. Abilities',
  },
  {
    link: '/class',
    text: '3. Class (TODO)',
  },
  {
    link: '/description',
    text: '4. Description',
  },
  {
    link: '/spells',
    text: 'View Spells',
  },
  {
    link: '/feats',
    text: 'View Feats',
  },
]

const Home = () => <div>Home.</div>

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Router>
      <NavBar links={links} />
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/races">
          <div className="layout container setup">
            <RaceSelectionForm />
          </div>
        </Route>

        <Route path="/asi">
          <div className="layout container asi">
            <AsiGenerator />
          </div>
        </Route>

        <Route path="/class">
          <div className="layout container">
            <Classes />
          </div>
        </Route>

        <Route path="/description">
          <div className="layout container descript">
            <CharDescription />
          </div>
        </Route>

        <Route path="/spells">
          <div className="layout container spells">
            <SpellsSelector />
          </div>
        </Route>

        <Route path="/feats">
          <div className="layout container">
            <Feats />
          </div>
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>
)

export default App
