import { ChangeEvent, useEffect, useState } from "react";
import "./RickAndMortyList.css";
import axios from "axios";
import { Result, RickAndMorty } from "../../Models/RickAndMorty";
import RickAndMortyCard from "../../Shared/RickAndMortyCard/RickAndMortyCard";
import urlService from "../../Services/UrlService";

function RickAndMortyList(): JSX.Element {
  const tableHeaders = ["id", "Name", "Status", "Species", "Image"];
  const [characters, setCharacters] = useState<Result[]>([]);
  let i: number = 1;
  // Mounting
  useEffect(() => {
    axios
      .get<RickAndMorty>(urlService.urls.characters)
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [species, setSpecies] = useState<string>("All");
  const getInitialStateSp = () => {
    const display = "All";
    return display;
  };
  const [status, setStatus] = useState<string>("All");
  const getInitialStateSt = () => {
    const display = "All";
    return display;
  };

  const [displaysp, setDisplaysp] = useState<string>(getInitialStateSp);
  const [displayst, setDisplayst] = useState<string>(getInitialStateSt);

  const filterCharacters = characters.filter((el) => { 
    if    ((displaysp === "All") && !(displayst === "All") )
    return (el.status === displayst) 
    if    ((displayst === "All") && !(displaysp === "All") )
    return (el.species === displaysp) 
    if    ((displayst === "All") && (displaysp === "All") )
    return true 
    return (
      (el.species === displaysp) && (el.status === displayst) 
    );
  });

  
  const handleChangeSpecies = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplaysp(e.target.value);    
  };
  const handleChangeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayst(e.target.value);    
  };

  const [selectedDrink, setSelectedDrink] = useState<String>();

  // This function will be triggered when a radio button is selected
  const radioHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDrink(event.target.value);
  };
  return (
    <div className="RickAndMortyList">
      <span>Display results by Species: </span>
      <select value={displaysp} onChange={handleChangeSpecies}>
      <option value="All">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
      <br />
      <br />
      <span>Display results by Status: </span>
      <select value={displayst} onChange={handleChangeStatus}>
        <option value="All">All</option>
        <option value="Alive">Alive</option>
        <option value="Unknown">Unknown</option>
        <option value="Dead">Dead</option>
      </select>
      <br />
      <br />
      
      <legend>Please select your most favorite drink?</legend>
        <p>
          <input
            type="radio"
            name="species"
            value="Coffee"
            id="coffee"
            onChange={radioHandler}
          />
          <label htmlFor="coffee">Coffee</label>
        </p>

        <p>
          <input
            type="radio"
            name="species"
            value="Tea"
            id="tea"
            onChange={radioHandler}
          />
          <label htmlFor="tea">Green Tea</label>
        </p>

        <p>
          <input
            type="radio"
            name="species"
            value="Pumpkin Juice"
            id="pumpkin"
            onChange={radioHandler}
          />
          <label htmlFor="pumpkin">Pumpkin Juice</label>
        </p>
      <h1>Country List using Table</h1>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((str) => (
              <th key={str}>{str}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterCharacters.map((c) => (
            <tr key={"country" + c.id}>
              <td>{c.id} </td>
              <td>{c.name} </td>
              <td>{c.status}</td>
              <td>{c.species}</td>
              <td>
                <img src={c.image} alt={c.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*          
            {characters.map((c) => (
              <RickAndMortyCard key={"character" + c.name} user={c} />
            ))} */}
    </div>
  );
}

export default RickAndMortyList;
