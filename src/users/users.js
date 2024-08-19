import { useEffect, useState } from 'react';
import axios, { AxiosInstance } from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} data-testid="user">
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default Users;
