export type TechStack = {
  id: string;
  setId: (id: string) => void;
  isDeleteVisible: boolean;
  setIsDeleteVisible: (isDeleteVisible: boolean) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
};

export type Email = {
  id: string,
  name: string,
  subject: string,
  date: string,
  message: string,
  email: string
  setId: (id: string) => void,
  setName: (name: string)=> void,
  setSubject: (subject: string)=> void,
  setDate: (date: string)=> void,
  setMessage: (message: string)=> void,
  setEmail: (email: string)=> void,

  handleEmail: (id: string, name: string, subject: string, date: string, message: string, email: string) => void
};