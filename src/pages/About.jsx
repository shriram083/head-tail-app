import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Page</h1>
        <p>
          This app is a simple interactive tool built using React that
          demonstrates the concept of conditional rendering and dynamic layout.
          It features a "Head & Tail" game where users can select either "H" or
          "T" from a dropdown, and their selections are displayed in a
          structured column format based on sequence logic. The app uses React
          Router for navigation, functional components for structure, and clean
          CSS styling for layout. It's a beginner-friendly project showcasing
          core React concepts like component state, props, event handling, and
          routing.
        </p>
      </div>
    </div>
  );
};

export default About;
