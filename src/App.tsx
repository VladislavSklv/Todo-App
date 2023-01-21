import { TextField, Container, createTheme, ThemeProvider, ListItemButton, ListItemText, IconButton } from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { addTodo } from './redux/todosSlice';


function App() {
	const [query, setQuery] = useState('');
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const dispatch = useAppDispatch();
	const todos = useAppSelector(state => state.todos);

	const theme = React.useMemo(() =>
		createTheme({
			palette: {
			mode: isDarkTheme ? 'dark' : 'light',
			},
		}), [isDarkTheme]
	);

	return (
		<ThemeProvider theme={theme}>
			<Container>
				<TextField 
					id="searchbar" 
					label="Todo text" 
					fullWidth
					value={query}
					onChange={(e) => setQuery(e.target.value)} 
				/>
				<button
					onClick={() => {
						if(query.length > 0){
							dispatch(addTodo({id: Date.now(), isActive: true, text: query}));
						}
					}}
				>Add</button>
				<div className='todo-list'>
					{todos.map(todo => (
						<ListItemButton 
							key={todo.id}
							onClick={() => console.log('add')}
						>
							<ListItemText primary={todo.text} />
							<IconButton
								aria-label="comment"
								onClick={(e) => {
									e.stopPropagation();
									console.log('delete')
								}}
							>
								<DeleteIcon/> 
							</IconButton>
						</ListItemButton>
					))}
				</div>
			</Container>
		</ThemeProvider>
	);
}

export default App;
