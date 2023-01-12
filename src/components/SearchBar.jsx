import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    navigate(`/search/${searchTerm}`);
  };

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: 'transparent',
        borderRadius: 20,
        border: '1px solid rgba(255,255,255,.5)',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        type='search'
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type='submit'
        sx={{ p: '10px', color: '#e91e63' }}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default SearchBar;
