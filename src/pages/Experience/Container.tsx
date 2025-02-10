import { FC } from 'react';
import { ExperienceFormModal, ExperienceTable } from './components';

const Container: FC = () => {
  return (
    <div>
      <ExperienceTable/>
      <ExperienceFormModal/>
    </div>
  );
};

export default Container;