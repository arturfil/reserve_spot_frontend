import { useContext } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import SideNavBar from './components/SideNavBar';

// import all view components
import HomeView from './views/HomeView';
import ErrorView from './views/ErrorView';
import ManageTopicsView from './views/ManageTopicsView';
import CreateMeetingView from './views/CreateMeetingView';
import MeetingDetailsView from './views/MeetingDetailsView';
import EditMeetingView from './views/EditMeetingView';
import LoginView from './views/LoginView';
import SignupView from './views/SignupView';
import AuthRoute from './components/AuthRoute';
import AdminRoute from './components/AdminRoute';
import ErrorAdminView from './views/ErrorAdminView';
import { AuthContext } from './context/AuthContext';
import LandingPageView from './views/LandingPageView';
import NotAuthRoute from './components/NotAuthRoute';

toast.configure();

function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <>
      <ToastContainer/>
      <BrowserRouter>
        <div className="row">
          { loggedIn && (
            <div className="col-2 col-sm-2 col-md-2 col-lg-2">
            <SideNavBar/>
          </div>
              )}
          {/* This is to make sure the classes are only applied if the user is logged in */}
          <div className={loggedIn ? `col-10 col-sm-10 col-md-10 col-lg-10` : ''}>
            <Switch>
              <NotAuthRoute exact path="/" component={LandingPageView}/>
              <NotAuthRoute exact path="/login" component={LoginView} />
              <NotAuthRoute exact path="/signup" component={SignupView} />
              <AuthRoute exact path="/home" component={HomeView} />
              <AdminRoute exact path="/manageTopics" component={ManageTopicsView} />
              <AuthRoute exact path="/meetingDetails/:id" component={MeetingDetailsView} />
              <AdminRoute exact path="/editMeeting/:id" component={EditMeetingView} />
              <AuthRoute exact path="/adminError" component={ErrorAdminView} />
              <AuthRoute exact path="/createMeeting" component={CreateMeetingView} />
              <Route exact pathname="**" component={ErrorView} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
