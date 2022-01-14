function NavBarComponent({user}) {
  return (
    <div className="NavBarComponent">
      <h1>Blog App</h1>
      <div>{user.username}</div>
      <button>Logout</button>
    </div>
  );
}

export default NavBarComponent;
