import React from 'react';
import Header from './components/Header'
import Products from './components/Products'
import Details from './components/Details'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import {DataProvider} from './components/DataProvider'
import Cart from './components/Cart'
class App extends React.Component{
  render(){
    return(
      <DataProvider>
     
        <div classsName="App">
         
          <Router>
         <Header />
       <section>
       <Switch>
        <Route  path='/products' component={Products} />
        <Route  path='/details/:id' component={Details} />
        <Route path='/cart'  component={Cart} />
        </Switch>
        </section>
        </Router>
        </div> 
        
        
    </DataProvider>
    );
  }
}

export default App;
