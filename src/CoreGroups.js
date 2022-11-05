// Example CoreGroup Record
// {
//    "id": 263,
//    "sfid": "a19f4000001527sAAA",
//    "name": "247 (VP: Senior - 6:30pm - 8:30pm - Michelle Tenzyk)",
//    "group_number": "G247",
//    "guide_id": "001f400001FT0RrAAL"
//  }

// if no memebers - display 'No members'
// we can create any routes or pages
// or change current routes or pages as long as other routes tay

export const CoreGroups = ({ coreGroups, members }) => {
  return (
    <div>
      <h1> Core Groups</h1>
      <ul>
        {coreGroups.map((coreGroup, idx) => (
          <>
            <li key={`coreGroup-${idx}`}>{coreGroup.name}</li>

            {members.filter((member) => member.core_group_id === coreGroup.id).length ? (
              members
                .filter((member) => member.core_group_id === coreGroup.id)
                .map(({ name }, idx) => (
                  <li style={{ listStyle: 'none' }} key={`group-member-${idx}`}>
                    {name}
                  </li>
                ))
            ) : (
              <li style={{ listStyle: 'none' }}>No Members</li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};
