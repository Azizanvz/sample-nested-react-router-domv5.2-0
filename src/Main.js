import React from 'react';
import {Switch, Route} from 'react-router-dom';

import OtherPage from './OtherPage';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

class Main extends React.Component{
    render() {
        const { path } = this.props.match;
    return (<>
        <Header />
            <Switch>
                <Route path={`${path}`} exact component={Home} />
                <Route path={`${path}/products`} component={OtherPage} />
            </Switch>
        <Footer />
    </>)
    }
}
export default Main;