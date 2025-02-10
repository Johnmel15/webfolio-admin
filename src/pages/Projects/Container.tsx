import { FC } from 'react';
import { ProjectFormModal, ProjectTable } from './components';

const Container: FC = () => {
  return (
    <div>
      <ProjectTable/>
      <ProjectFormModal/>
    </div>
  );
};

export default Container;