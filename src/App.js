

import PropTypes from 'prop-types';
import './App.css';
// import FeedbackItem from './Components/feedbackitem';
import Header from './Components/Header';

import FeedbackList from './Components/feedbackList';
import FeedbackStats from './Components/feedbackStats';
import FeedbackForm from './Components/feedbackForm';

import AboutIconLink from './Components/aboutIconLink';
import AboutPage from './pages/aboutPage';
import { FeedbackProvider } from './context/feedbackContext';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom"



function App() {

  return (
   <FeedbackProvider>
    <Router >
      <Header />
      <div className="container">

        <Route exact path='/'>
          <FeedbackForm/>
          <FeedbackStats  />
          <FeedbackList/>
        </Route>

        <Route path='/about' component={AboutPage} />

        <AboutIconLink></AboutIconLink>
      </div>
    </Router>
    </FeedbackProvider>
  );
}




Header.defaultProps = {
  text: "feedback UI"
}


Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default App;
