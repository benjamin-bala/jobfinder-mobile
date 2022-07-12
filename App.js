import StoreContext from './src/context/StoreContext';
import Screens from './src/Screens/index';
import LoadingScreen from './src/Screens/LoadingScreen';

export default function App() {
  return (
    <StoreContext>
      <LoadingScreen>
        <Screens />
      </LoadingScreen>
    </StoreContext>
  );
}
