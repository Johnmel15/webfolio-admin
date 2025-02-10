import { FC } from 'react';
import { EmailTable, EmailFormModal } from './components';

const Container: FC = () => {
  return (
    <div>
      <EmailTable/>
      <EmailFormModal/>
    </div>
  );
};

export default Container;