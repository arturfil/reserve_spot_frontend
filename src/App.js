import { BrowserRouter, Route, Switch } from 'react-router-dom'
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

function App() {
  return (
    <BrowserRouter>
      <div className="row">
        <div className="col-2 col-sm-2 col-md-2 col-lg-2">
          <SideNavBar/>
        </div>
        <div className="col-10 col-sm-10 col-md-10 col-lg-10">
          <Switch>
            <Route exact path="/" component={HomeView} />
            <AuthRoute exact path="/manageTopics" component={ManageTopicsView} />
            <Route exact path="/meetingDetails/:id" component={MeetingDetailsView} />
            <AdminRoute exact path="/editMeeting/:id" component={EditMeetingView} />
            <AuthRoute exact path="/createMeeting" component={CreateMeetingView} />
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/signup" component={SignupView} />
            <Route exact path="**" component={ErrorView} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
