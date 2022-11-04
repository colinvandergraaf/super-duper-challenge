// Example CoreGroup Record
// {
//    "id": 263,
//    "sfid": "a19f4000001527sAAA",
//    "name": "247 (VP: Senior - 6:30pm - 8:30pm - Michelle Tenzyk)",
//    "group_number": "G247",
//    "guide_id": "001f400001FT0RrAAL"
//  }

export const CoreGroups = ({ coreGroups }) => {
  return (
    <div>
      <h1> Core Groups</h1>
      <ul>
        {coreGroups.map((coreGroup) => (
          <>
            <li>{coreGroup.name}</li>
          </>
        ))}
      </ul>
    </div>
  );
};
