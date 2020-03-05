// import 'regenerator-runtime/runtime'
import {h, render, FunctionComponent} from 'preact';
import Router from 'preact-router';
import Index from './pages/index';
import './index.scss';

const App: FunctionComponent = () => {
  return (
    <Router>
      <Index default path='/'/>
    </Router>
  )
};

render(<App/>, document.body);
