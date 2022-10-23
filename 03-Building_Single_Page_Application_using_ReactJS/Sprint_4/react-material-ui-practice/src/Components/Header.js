import React , { Component } from 'react' ;
import Button from '@material-ui/core/Button';
import SearchIcon from '@mui/icons-material/Search';
export default class Header extends Component {
    render(){
        return(<div>
           
            <Button color="primary"   style={{float:"left"}} size='medium'>SUBSCRIBE</Button>
            
            <Button variant="outlined" color="primary" size='small'  style={{float:"right"}}>
               SIGN UP
            </Button>
            <SearchIcon color='disabled' fontSize='medium'  style={{float:"right" }}></SearchIcon>
            
            <h3 style={{marginTop:"2px"}}>Blog</h3>
        </div>) ;
    }
}