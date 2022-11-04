import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import group_data from './data/core_groups.json';
import member_data from './data/members.json';

import { CoreGroups } from './CoreGroups';
import { Members } from './Members';
import { Home } from './Home';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coreGroups: group_data,
      members: member_data,
    };
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/members">Members</Link>
            </li>
            <li>
              <Link to="/core-groups">Core Groups</Link>
            </li>
          </ul>

          <hr />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/members" element={<Members members={this.state.members} />} />
            <Route
              path="/core-groups"
              element={<CoreGroups coreGroups={this.state.coreGroups} />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
