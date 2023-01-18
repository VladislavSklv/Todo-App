import { TextField, Container, createTheme, ThemeProvider, ListItemButton, ListItemText, IconButton} from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
	const [query, setQuery] = useState('');
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const theme = React.useMemo(() =>
		createTheme({
			palette: {
			mode: isDarkTheme ? 'dark' : 'light',
			},
		}), [isDarkTheme]
	);

	const todos = [
		{id: 1, text: 'Go shopping'},
		{id: 2, text: 'Take pills'},
		{id: 3, text: 'Turn off the TV'}
	]

	return (
		<ThemeProvider theme={theme}>
			<Container>
				<TextField 
					id="searchbar" 
					label="Search" 
					fullWidth
					value={query}
					onChange={(e) => setQuery(e.target.value)} 
				/>
				<div className='todo-list'>
					{todos.map(todo => (
						<ListItemButton 
							component="a" 
							href="#simple-list"
						>
							<ListItemText primary={todo.text} />
							<IconButton aria-label="comment">
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
