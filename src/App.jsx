import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './components/Contexts/AuthContext'
import Home from './pages'
import Model from './pages/model'
// import Login from './pages/login'
import Signup from './pages/signup'
import ForgotPassword from './pages/forgotpassword'
import UpdateProfile from './pages/updateprofile'
import Dashboard from './pages/dashboard'
// import PrivateRoute from './pages/privateroute'
import Creators from './pages/creators'


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/aeronautics" component={Home} exact/>
          <Route path="/aeronautics" component={Home} exact/>
          <Route path="/model" component={Model} exact />
          <Route path="/creators" component={Creators} exact/>
          {/* <Route path="/login" component={Login} exact/> */}
          <Route path="/signup" component={Signup} exact/>
          <Route path="/forgot-password" component={ForgotPassword} exact/>
          <Route path="/update-profile" component={UpdateProfile} exact/>
          <Route path="/dashboard" component={Dashboard} exact/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;