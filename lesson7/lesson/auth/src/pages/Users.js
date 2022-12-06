import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, removeUser } from '../store/usersSlice';

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <h1>Users</h1>
      <table className={'table table-striped'}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(removeUser(user.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Users;
