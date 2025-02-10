import { FC } from 'react';
import { SettingsTable, SettingsFormModal } from './components';

const Container: FC = () => {
  return (
    <div>
      <SettingsTable/>
      <SettingsFormModal/>
    </div>
  );
};

export default Container;