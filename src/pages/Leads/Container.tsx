import { FC } from 'react';
import { LeadsTable, LeadsFormModal } from './components';

const Container: FC = () => {
  return (
    <div>
      <LeadsTable/>
      <LeadsFormModal/>
    </div>
  );
};

export default Container;