import "./About.css";

function About(): JSX.Element {
  return (
    <div className="About">
      <p>
        This site shows a list of Rick & Morty Characters retrieved from:
        <br />
        https://rickandmortyapi.com/api/character
      </p>
      <p>
        The list is presented as a table or by cards with search & filter
        functionality, both by country name and by capital
      </p>
      <p>The site was created using React.ts as a single page application</p>
    </div>
  );
}

export default About;
