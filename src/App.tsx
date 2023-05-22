import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routers from 'routers';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'common/ErrorBoundary';

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: 1,
				refetchOnWindowFocus: false,
				keepPreviousData: true,
			},
		},
	});

	return (
		<ErrorBoundary>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<ToastContainer
						closeButton={false}
						position='top-right'
						autoClose={5000}
						hideProgressBar
						newestOnTop
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable={false}
						pauseOnHover
						theme='light'
						toastClassName='Toast-Container'
						bodyClassName='size-16'
					/>
					<Routers />
				</QueryClientProvider>
			</BrowserRouter>
		</ErrorBoundary>
	);
}

export default App;
