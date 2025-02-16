/**
 * TechStack state type
 * 
 * @property {string} id - TechStack id
 * @property {(id: string) => void} setId - Set TechStack id
 * @property {boolean} isDeleteVisible - TechStack delete visibility
 * @property {(isDeleteVisible: boolean) => void} setIsDeleteVisible - Set TechStack delete visibility
 * @property {boolean} isModalOpen - TechStack modal open status
 * @property {(isModalOpen: boolean) => void} setIsModalOpen - Set TechStack modal open status
 */
export type TechStack = {
  id: string;
  setId: (id: string) => void;
  isDeleteVisible: boolean;
  setIsDeleteVisible: (isDeleteVisible: boolean) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
};

/**
 * Email state type
 * 
 * @property {string} id - Email id
 * @property {string} name - Email sender name
 * @property {string} subject - Email subject
 * @property {string} date - Email date
 * @property {string} message - Email message
 * @property {string} email - Email sender email
 * @property {string} isSelected - Email selected status
 * @property {(id: string) => void} setId - Set email id
 * @property {(name: string) => void} setName - Set email sender name
 * @property {(subject: string) => void} setSubject - Set email subject
 * @property {(date: string) => void} setDate - Set email date
 * @property {(message: string) => void} setMessage - Set email message
 * @property {(email: string) => void} setEmail - Set email sender email
 * @property {(isSelected: string) => void} setIsSelected - Set email selected status
 * @property {(id: string, name: string, subject: string, date: string, message: string, email: string) => void} handleEmail - Handle email state
 */
export type Email = {
  id: string,
  name: string,
  subject: string,
  date: string,
  message: string,
  email: string
  isSelected: string;
  isShowDelete: boolean;
  setId: (id: string) => void,
  setName: (name: string)=> void,
  setSubject: (subject: string)=> void,
  setDate: (date: string)=> void,
  setMessage: (message: string)=> void,
  setEmail: (email: string)=> void,
  setIsSelected: (isSelected: string) => void,
  setIsShowDelete: (isShowDelete: boolean) => void,

  handleEmail: (id: string, name: string, subject: string, date: string, message: string, email: string) => void,
  clearEmailState: () => void,
};