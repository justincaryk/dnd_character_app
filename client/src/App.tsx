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
import Layout from './components/layout'
import Home from './components/home'

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

const App: React.FC = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN)

  if (!authToken) {
    const client = new ApolloClient({
      uri: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/graphql' :'/graphql',
      cache: new InMemoryCache(),
    })
    return (
      <ApolloProvider client={client}>
        <Router>
          <Layout>
            <Switch>
              {/* signed out */}
              {!authToken && (
                <div className='cotainer'>
                  <NavBar links={publicLinks} isPublic />
                  <Route exact path='/'>
                    <div className='layout'>
                      <div className='font-roboto uppercase text-3xl text-center'>Public landing page</div>
                    </div>
                  </Route>
                  <Route path='/signin'>
                    <div className='layout'>
                      <SignIn />
                    </div>
                  </Route>
                  <Route path='/signup'>
                    <div className='layout'>
                      <SignUp />
                    </div>
                  </Route>
                </div>
              )}
            </Switch>
          </Layout>
        </Router>
      </ApolloProvider>
    )
  } else {
    const link = new HttpLink({
      uri: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/graphql' :'/graphql',
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
        },
      },
    })

    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Layout>
              <NavBar links={privateLinks} />

              <Route exact path='/'>
                <div className='container'>
                  <Home />
                </div>
              </Route>

              <Route path='/races'>
                <div className='container'>
                  <RaceSelectionForm />
                </div>
              </Route>

              <Route path='/asi'>
                <div className='container'>
                  <AsiGenerator />
                </div>
              </Route>

              <Route path='/classes'>
                <div className='container'>
                  <Classes />
                </div>
              </Route>

              <Route path='/description'>
                <div className='container'>
                  <CharDescription />
                </div>
              </Route>

              <Route path='/spells'>
                <div className='container spells'>
                  <SpellsSelector />
                </div>
              </Route>

              <Route path='/feats'>
                <div className='container'>
                  <Feats />
                </div>
              </Route>

              <Route path='/sheet'>
                <div className=''>
                  <CharacterSheet />
                </div>
              </Route>

              <Route path='/signout'>
                <div className=''>
                  <SignOut />
                </div>
              </Route>
            </Layout>
          </Switch>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
