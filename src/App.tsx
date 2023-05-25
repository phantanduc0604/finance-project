import { ErrorBoundary } from 'common/ErrorBoundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routers from 'routers';
import './App.css';
import LoadingFullPage from 'components/LoadingFullPage';
import { useAtom } from 'jotai';
import { blurLoading, openLoading } from 'store/global';

function App() {
	const [loading] = useAtom(openLoading);
	const [blur] = useAtom(blurLoading);

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
					<LoadingFullPage show={loading} blur={blur} />
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
