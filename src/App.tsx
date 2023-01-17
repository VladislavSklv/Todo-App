import { Stack, TextField, Button } from '@mui/material';
import React, { useState } from 'react';

function App() {
	const [query, setQuery] = useState('');

	return (
		<div className='App'>
			<Stack direction={'row'} spacing={2}>
				<TextField 
					id="outlined-basic" 
					label="Search" 
					variant="outlined"
					value={query}
					onChange={(e) => setQuery(e.target.value)} 
				/>
				<Button variant="contained" color="success">
					<span style={{fontSize: 30, lineHeight: 1}}>+</span>
				</Button>
			</Stack>
		</div>
	);
}

export default App;
