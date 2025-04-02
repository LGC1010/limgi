export type ProjectItem = {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  image?: string;
  team: boolean;
  stack: string[];
  github?: string;
  demo: string;
  type: string;
};
