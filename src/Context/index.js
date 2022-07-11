import { Theme } from './Theme';
import { metrics, colors, font } from '../theme';

export const Context: React.FC = ({ children }) => {
  const value = { metrics, colors, font };

  return <Theme.Provider value={value}>{children}</Theme.Provider>;
};
