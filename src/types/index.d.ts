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

interface ItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

interface TodoForm {
  addTodo: (text: string) => void;
}

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
