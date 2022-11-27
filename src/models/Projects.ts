export interface Project {
  id: string;
  title: string;
  description: string;

  creatorUser: string;
  members: string[];
  favorite: boolean;
}
