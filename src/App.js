import React, { useState, Fragment } from 'react';
import './css/app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Pokemons from './components/pokemons/Pokemons';
import SearchBar from './components/layout/SearchBar';
import Pokemon from './components/Pokemon/Pokemon';
import Navbar from './components/layout/Navbar';
import SidebarWrapper from './components/layout/SidebarWrapper';
import SidebarDrawer from './components/layout/SidebarDrawer';
import Backdrop from './components/layout/Backdrop';
// Redux - import
import { Provider } from 'react-redux';
import store from './store';

// Redux - import

function App() {
    const [current, setCurrent] = useState(1);
    const [sideDrawer, setSideDrawer] = useState(false);

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar setSideDrawer={setSideDrawer} />
                    <SidebarDrawer sideDrawer={sideDrawer} setSideDrawer={setSideDrawer} />
                    {sideDrawer ? <Backdrop /> : ''}
                    <SidebarWrapper />
                    <SearchBar />
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route
                            exact
                            path='/pokemons'
                            component={() => <Pokemons current={current} setCurrent={setCurrent} />}
                        />
                        <Route exact path='/pokemons/:name' component={Pokemon} />
                    </Switch>
                </Fragment>
            </Router>
        </Provider>
    );
}

export default App;
