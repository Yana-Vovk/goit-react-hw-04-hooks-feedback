
import { useState, useEffect } from 'react';

export default function useFeedback(key) {
  const [state, setState] = useState('state');

  useEffect(() => {
      setState(state => state + 1);
  }, [key, state]);

  return [state, setState];
}