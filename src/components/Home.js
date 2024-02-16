const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome :D</p>
      <div>(test)delete this: {process.env.REACT_APP_HOST.substr(0, 4)}</div>
    </div>
  );
};
export default Home;
