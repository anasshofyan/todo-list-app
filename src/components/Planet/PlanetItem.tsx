import React from "react";
import { formatDistance } from "../../lib/utils";
import { PlanetCard, PlanetDetailRow } from "../../assets/styles/PlanetStyles";

const PlanetItem: React.FC<PlanetItemProps> = ({ planet }) => {
  return (
    <PlanetCard>
      <h3>{planet.name}</h3>
      <div>
        <PlanetDetailRow>
          Climate 🌍 - <strong>{planet?.climate}</strong>
        </PlanetDetailRow>
        <PlanetDetailRow>
          Terrain 🏞️ - <strong>{planet?.terrain}</strong>
        </PlanetDetailRow>
        <PlanetDetailRow>
          Population 👥 - <strong>{planet?.population}</strong>
        </PlanetDetailRow>
        <PlanetDetailRow>
          Diameter 🌐 - <strong>{formatDistance(planet?.diameter)}</strong>
        </PlanetDetailRow>
      </div>
    </PlanetCard>
  );
};

export default PlanetItem;
