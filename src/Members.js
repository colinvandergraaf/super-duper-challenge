// Example Member Record
// {
//    "id": 19,
//    "uuid": "1e35f85d-0bf5-4995-b973-2588529e7dde",
//    "name": "Justin Timberlake",
//    "current_company": "Chief",
//    "members_status": "Active",
//    "isdeleted": false,
//    "createddate": "2019-04-05T14:02:14",
//    "title": "Membership",
//    "firstname": "Justin",
//    "lastname": "Timberlake",
//    "email": "samantha@example.com",
//    "sfid": "IyAOjAAN",
//    "core_group_id": 124
//  }

export const Members = ({ members }) => {
  <div>
    <h1>Members</h1>
    <ul>
      {members.map((member, idx) => (
        <li key={`member-${idx}`}>{member.name}</li>
      ))}
    </ul>
  </div>;
};
