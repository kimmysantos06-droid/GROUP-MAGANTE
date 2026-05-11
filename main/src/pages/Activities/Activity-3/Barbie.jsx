import "./Barbie.css";
import BarbieCard from "../../../components/barbie-card/BarbieCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

const Barbie = () => {
  const [barbieList, setBarbieList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/barbie.json")
      .then((response) => response.json())
      .then((result) => {
        setBarbieList(result.barbie_list);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">🎀 Loading Barbie movies... 🎀</div>;
  }

  return (
    <main>
      <section className="barbie-container">
        <h1 className="title">🎀 Barbie Movie Collection 🎀</h1>
        <div className="barbie-list">
          {barbieList.map((data) => (
            /* Wrap the card in a Link to navigate to the details page */
              <BarbieCard barbie={data} />
        
          ))}
        </div>
        <Link to="/">← Back to MCO</Link>
      </section>
    </main>
  );
};

export default Barbie;