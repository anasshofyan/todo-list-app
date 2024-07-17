interface TitleProps {
  children: React.ReactNode;
}

interface PlanetItemProps {
  planet: PlanetData;
}

interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: number;
  diameter: number;
  gravity: string;
  orbital_period: string;
  rotation_period: string;
  surface_water: string;
  created: Date;
  url: string;
}

interface Props {
  addTodo: (text: string) => void;
}

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
