import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/about">Go to About</Link> <br />
        <Link to="/head-tail">Go to Head & Tail</Link>
      </nav>
    </div>
  );
};

export default Home;
