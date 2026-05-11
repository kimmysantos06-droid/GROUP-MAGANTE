import "./BarbieCard.css";

const BarbieCard = ({ barbie, className }) => {
  return (
    <div className={`barbie-card ${className}`}>

      <div className="barbie-image-wrapper">
        <img
          src={barbie.image}
          alt={barbie.title}
          className="barbie-image"
        />
      </div>

      <div className="barbie-header">
        <h2 className="barbie-title">{barbie.title}</h2>
        <span className="barbie-rating">⭐ {barbie.rating}</span>
      </div>

      <p className="barbie-description">{barbie.description}</p>

      <div className="barbie-meta">
        <span className="meta-item">📅 Year: {barbie.year}</span>
        <span className="meta-item">⏱️ Duration: {barbie.Duration} min</span>
      </div>

      <div className="barbie-genres">
        {barbie.genres.map((genre, index) => (
          <span key={index} className="genre-tag">{genre}</span>
        ))}
      </div>
    </div>
  );
};

export default BarbieCard;