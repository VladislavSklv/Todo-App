import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './redux/todosSlice';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const store = configureStore({
	reducer: todosSlice
})


root.render(
	
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;