import React , {createContext, useState} from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Header from './components/commonComponents/Header'
import Home from './components/homePage/Home'
import SearchResults from './components/searchPage/SearchResults'
import { Provider } from 'react-redux'
import { store } from './store/store'

import VideoDetails from './components/videoPage/VideoDetails'
import Bar from './components/commonComponents/Bar'


export const Context =  createContext();
const App = () => {
  const [menu , setMenu] = useState(true)
  const [query , setQuery] = useState('')
  const [category , setCategory] = useState('New')
  const [loading , setLoading] = useState(true);

  return (
    <Context.Provider value={{menu , setMenu ,query , setQuery , category , setCategory , setLoading, loading}}>
      <Provider store={store}>
    <Router>
      {loading && <Bar/>}
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/search/:query" exact element={<SearchResults/>}/>
        <Route path="/video/:id" exact element={<VideoDetails/>}/>
      </Routes>
    </Router>
    </Provider>
    </Context.Provider>
  )
}

export default App 