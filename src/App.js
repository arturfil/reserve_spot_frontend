import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SideNavBar from './components/SideNavBar';

// import all view components
import HomeView from './views/HomeView';
import ErrorView from './views/ErrorView';
import ManageTopicsView from './views/ManageTopicsView';
import CreateMeetingView from './views/CreateMeetingView';

function App() {
  return (
    <BrowserRouter>
      <div className="row">
        <div className="col-2">
          <SideNavBar/>
        </div>
        <div className="col-10">
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/manageTopics" component={ManageTopicsView} />
            <Route exact path="/createMeeting" component={CreateMeetingView} />
            <Route exact path="**" component={ErrorView} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
