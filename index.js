import React from 'react';
import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the User Form Application</h1>
      <p>This is the home page of your application.</p>
      <Link href="/createUser">
        <a>Create User</a>
      </Link>
      <br />
      <Link href="/viewUsers">
        <a>View Users</a>
      </Link>
    </div>
  );
}

export default HomePage;
