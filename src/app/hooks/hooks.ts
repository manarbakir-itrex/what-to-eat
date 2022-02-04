import { useEffect } from 'react';

export const usePageTitle = (title = '', prefix = 'What to Eat') => {
  useEffect(() => {
    document.title = prefix + (title ? ` - ${title}` : '');
  }, [title]);
};
