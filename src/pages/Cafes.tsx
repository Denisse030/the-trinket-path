import { useState } from "react";
import cafesData from "../data/cafes.json";
import "../App.css";
import LeafletMap from "../components/LeafletMap";

type Place = {
 id: number;
 name: string;
 borough: string;
 neighborhood: string;
 address: string;
 description: string;
 image: string;
 website: string;
 instagram: string;
 priceRange: string;
 coordinates: {
   lat: number;
   lng: number;
 };
};

const Cafes = () => {
  const [selectedCard, setSelectedCard] = useState<Place | null>(null);
  
  return (
  <main className="explore-page">
    <section className="explore-header">
      <h2>YOU CHOSE THE PATH TOWARDS THE</h2>
      <h1>Aromatic Cafes</h1>
      <h3>Click through the gallery of photos!</h3>
    </section>

    <section className="explore-grid">
      {cafesData.map((item: Place) => (
        <button key={item.id} className="explore-card" onClick={() => setSelectedCard(item)}>
          <div className="explore-card-image">
            {item.image ? (
              <img src={item.image} alt={item.name} />
            ) : (
              <div className="image-placeholder"></div>
            )}
          </div>
          <div className="explore-card-title">{item.name}</div>
        </button>
      ))}
    </section>

    <section className="explore-map-section">
      <LeafletMap places={cafesData} />
    </section>

    {selectedCard && (
      <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
        <div className="modal-card" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setSelectedCard(null)}>×</button>

          {selectedCard.image ? (
            <img src={selectedCard.image} alt={selectedCard.name} />
          ) : (
            <div className="modal-placeholder"></div>
          )}

          <h2>{selectedCard.name}</h2>
          <p>{selectedCard.description}</p>
          <p><strong>Neighborhood:</strong> {selectedCard.neighborhood},{" "} {selectedCard.borough}</p>
          <p><strong>Address:</strong> {selectedCard.address}</p>
          <p><strong>Price Range:</strong> {selectedCard.priceRange}</p>

          <div className="modal-links">
            <a href={selectedCard.website} target="_blank" rel="noreferrer">Website</a>
            <a href={selectedCard.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    )}
  </main>
 );
};

export default Cafes;