import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => (
    <Stack 
    direction="row" 
    alighitems="center" 
    p={2}  
    sx={{position: 'sticky', background: '#202020', top: '0', justifyContent: 'space-between', zIndex: '1'}}>
      <Link to="/" style={{ display: 'flex', alighitems: 'center' }}>
        <img src={logo} alt="logo" height={45}/>
      </Link>
      <SearchBar />
    </Stack>
  )

export default Navbar