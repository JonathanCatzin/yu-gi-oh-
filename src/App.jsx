import { AppRouter } from './AppRouter';
import { CartaProvider } from './context/CartaProvider';


function App() {
	return (
			<CartaProvider>
        <AppRouter />
      </CartaProvider>
	);
}

export default App;
