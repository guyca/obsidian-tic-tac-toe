import { useEffect } from 'react';

type Destructor = () => void | undefined;

export const useComponentDidMount = (onMount: () => void | Destructor) => {
  useEffect(() => {
    return onMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
