import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";


const heroImages = require.context("../assets", true);

const HeroScreen = () => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  if (!hero) return <Navigate to="/" />;

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const imagePath = heroImages(`./${ id }.jpg`);

  return (
    <div className="row mt-5 animate__animated animate__backInLeft">
      <div className="col-4">
        <img src={imagePath} alt={superhero} className="img-thumbnail" />
      </div>

      <div className="col-8">
        <h3>{superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
          <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button 
        className="btn btn-outline-info"
        onClick={handleReturn}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
