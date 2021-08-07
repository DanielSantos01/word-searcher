import React, { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import Main from './main';

const Entry: React.FC = () => {
  const [words, setWords] = useState<string[]>([]);

  const handleSearch = useCallback(() => {
    const sourceValue: string = document.querySelector<any>('.src')?.value;
    const targetValue: string = document.querySelector<any>('.tgt')?.value;
    if (!sourceValue || !targetValue) {
      toast('Please, fill the required fields');
      return;
    }
    setWords([sourceValue, targetValue, 'a', 'haha', 'this', 'those']);
  }, []);

  return <Main handleSearch={handleSearch} words={words} />;
};

export default Entry;
