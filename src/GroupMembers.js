import React from 'react';
import { GroupCard } from './components/GroupCard';
// Members
// {
//   "id": 19,
//   "uuid": "1e35f85d-0bf5-4995-b973-2588529e7dde",
//   "name": "Justin Timberlake",
//   "current_company": "Chief",
//   "members_status": "Active",
//   "isdeleted": false,
//   "createddate": "2019-04-05T14:02:14",
//   "title": "Membership",
//   "firstname": "Justin",
//   "lastname": "Timberlake",
//   "email": "samantha@example.com",
//   "sfid": "IyAOjAAN",
//   "core_group_id": 124
// },

// Groups
// {
//   "id": 255,
//   "sfid": "a19f40000034mbdAAA",
//   "name": "193 (VP: Senior - 4:00pm - 6:00pm - Val Williams)",
//   "group_number": "G193",
//   "guide_id": "001f400001GgsRZAAZ"
// },

export const GroupMembers = ({ coreGroups, members }) => {
  // const [groupMembers, setGroupMembers] = useState([]);

  console.log(coreGroups);
  return (
    <div>
      <>
        <h1>Hello Group Members</h1>
        {coreGroups.map((group) => (
          <GroupCard>
            <div>
              <header>
                <h3>{group.name}</h3>
              </header>
              <div className="card-body">
                <ul>
                  {members.filter((member) => member.core_group_id === group.id).length === 0 ? (
                    <p> No Members </p>
                  ) : (
                    members
                      .filter((member) => member.core_group_id === group.id)
                      .map((member, i) => <li key={`member-${i}`}>{member.name}</li>)
                  )}
                </ul>
              </div>
            </div>
          </GroupCard>
        ))}
      </>
    </div>
  );
};
