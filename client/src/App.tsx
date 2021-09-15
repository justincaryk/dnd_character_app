import React from 'react'
import './scss/App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AUTH_TOKEN } from './constants'

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
import CharacterSheet from './components/character-sheet/character-sheet'
import SignUp from './components/sign-up'
import SignIn from './components/sign-in'

import { setContext } from '@apollo/client/link/context'
import { HttpLink } from '@apollo/client'
import SignOut from './components/sign-out'

const publicLinks: LinkType[] = [
  {
    link: '/signup',
    text: 'Signup',
  },
  {
    link: '/signin',
    text: 'Signin',
  },
]

const privateLinks: LinkType[] = [
  {
    link: '/races',
    text: '1. Race',
  },
  {
    link: '/asi',
    text: '2. Abilities',
  },
  {
    link: '/',
    text: '3. Class (TODO)',
  },
  {
    link: '/description',
    text: '4. Description',
  },
  {
    link: '/sheet',
    text: '5. Character Sheet',
  },
  {
    link: '/spells',
    text: 'View Spells',
  },
  {
    link: '/feats',
    text: 'View Feats',
  },
  {
    link: '/classes',
    text: 'View Classes',
  },
  {
    link: '/signout',
    text: 'Signout',
  },
]

const Home = () => <div className='layout container'>Home.</div>

const App: React.FC = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN)
  
  if (!authToken) {
    const client = new ApolloClient({
      uri: 'http://localhost:8080/graphql',
      cache: new InMemoryCache(),
    })
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            {/* signed out */}
            {!authToken && (
              <>
                <NavBar links={publicLinks} />
                <Route path='/signup'>
                  <div className='layout'>
                    <SignUp />
                  </div>
                </Route>
                <Route path='/signin'>
                  <div className='layout'>
                    <SignIn />
                  </div>
                </Route>
              </>
            )}
          </Switch>
        </Router>
      </ApolloProvider>
      )
  } else {
    const link = new HttpLink({
      uri: process.env.GRAPHQL_URL,
      // Additional options
    })

    const authLink = setContext((_, { headers }) => {
      const token = localStorage.getItem(AUTH_TOKEN)
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : 'Bearer',
        },
      }
    })

    const client = new ApolloClient({
      link: authLink.concat(link),
      cache: new InMemoryCache(),
      defaultOptions: {
          watchQuery: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'ignore',
          },
          query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
          }
      }
    })
    
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            {authToken && (
              <>
                <NavBar links={privateLinks} />
    
                <Route exact path='/'>
                  <Home />
                </Route>
    
                <Route path='/races'>
                  <div className='layout container setup'>
                    <RaceSelectionForm />
                  </div>
                </Route>
    
                <Route path='/asi'>
                  <div className='layout container asi'>
                    <AsiGenerator />
                  </div>
                </Route>
    
                <Route path='/classes'>
                  <div className='layout container'>
                    <Classes />
                  </div>
                </Route>
    
                <Route path='/description'>
                  <div className='layout container descript'>
                    <CharDescription />
                  </div>
                </Route>
    
                <Route path='/spells'>
                  <div className='layout container spells'>
                    <SpellsSelector />
                  </div>
                </Route>
    
                <Route path='/feats'>
                  <div className='layout container'>
                    <Feats />
                  </div>
                </Route>
    
                <Route path='/sheet'>
                  <div className='layout'>
                    <CharacterSheet />
                  </div>
                </Route>

                <Route path='/signout'>
                  <div className='layout'>
                    <SignOut />
                  </div>
                </Route>
              </>
            )}
          </Switch>
        </Router>
      </ApolloProvider>
      )
  }
}

export default App
