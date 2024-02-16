const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome :D</p>
      <div>
        (test)delete this:{' '}
        {process.env.REACT_APP_API_URL &&
          process.env.REACT_APP_API_URL.substr(0, 10)}
      </div>
    </div>
  );
};
export default Home;
