import { FC } from 'react';
import { EmailList } from './components';
import { Card } from '@/components/ui/card';

const Container: FC = () => {
  return (
    <Card className="flex w-full px-4 py-3">
      <EmailList/>
      <div className="px-2 py-2 border border-gray-400 border-l-0 w-full">adasd</div>
    </Card>
    
  );
};

export default Container;