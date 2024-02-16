const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome :D</p>
      {process.env.REACT_APP_HOST}
    </div>
  );
};
export default Home;
