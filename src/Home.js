export const Home = () => (
  <div style={{ margin: '20px' }}>
    <h1>Home</h1>
    <p>
      Welcome to Chief's Pairing Session
      <span role="img" aria-label="Emoji">
        {' '}
        🎉😁
      </span>
    </p>
    <h2>Agenda</h2>
    <ul>
      <li>React Exercises</li>
      <li>Server Exercises</li>
      <li>Open Q&A</li>
    </ul>

    <h2> Task 1 </h2>
    <p>
      Our first task is to display all members for each Core Group. How we choose to get and display
      this information is up to us.
    </p>
    <h3> What is a Core Group? </h3>
    <p>
      At Chief, our members are part of a small cohort of people that they meet with monthly called
      Core groups. Core Groups are central to the Chief member experience. Groups provide a venue to
      develop and discuss professional skills.
    </p>
    <h4>Important Information:</h4>
    <ul>
      <li>
        Not all Core Groups have members. If a Core Group does not have members display 'NO MEMBERS'
      </li>
      <li>We can create any routes/pages</li>
      <li>
        We can change the current routes/pages in any way we like as long as the current
        functionality of being able to display <b>ALL</b> members & <b>ALL</b> core groups stay
        intact
      </li>
      <li>
        The data structure for Members can be found in <b>`src/data/members.json`</b>
      </li>
      <li>
        The data structure for Core Groups can be found in <b>`src/data/core_groups.json`</b>
      </li>
      <li>The internet is at your disposal for this, feel free to search!</li>
    </ul>
  </div>
);
