export const UserFilterBtn = ({
  usersFromServer,
  selectedUserId,
  setSelectedUserId,
}) => {
  const sortedUsers = Array.isArray(usersFromServer)
    ? [...usersFromServer].sort((a, b) => a.name.localeCompare(b.name))
    : [];
  const onSelectUser = id => {
    setSelectedUserId(id);
  };

  return (
    <div className="buttons">
      <p className="panel-tabs has-text-weight-bold">
        <a
          data-cy="FilterAllUsers"
          href="#/"
          onClick={() => onSelectUser(null)}
          className={selectedUserId === null ? 'is-active' : ''}
        >
          All
        </a>

        {sortedUsers.map(user => (
          <a
            key={user.id}
            data-cy="FilterUser"
            href="#/"
            onClick={() => onSelectUser(user.id)}
            className={selectedUserId === user.id ? 'is-active' : ''}
          >
            {user.name}
          </a>
        ))}
      </p>
    </div>
  );
};
