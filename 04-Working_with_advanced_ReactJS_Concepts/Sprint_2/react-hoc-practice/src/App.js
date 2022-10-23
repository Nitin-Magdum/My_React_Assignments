import './App.css';
import FormsDemo3 from './components/FormsDemo3';
import FormDemo2 from './components/FormDemo2';
import FormDemo1 from './components/FormDemo1';
import FormDemo4 from './components/FormDemo4';
import State from './components/State';
import Zip from './components/Zip';
import Country from './components/Country';
import Boxcomp from './components/Boxcomp';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { ErrorBoundary ,errorHandler} from "react-error-boundary";
import ErrorComponent from "./components/ErrorComponent";
import Grid from '@mui/material/Grid';
import './css/style.css'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function App() {
  return (
    //<FormsDemo3/>
    <div id='p'>
      <ErrorBoundary FallbackComponent={ErrorComponent} onError={errorHandler}>
      <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
    <Item><h1>Shipping Details</h1></Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item><FormsDemo3/></Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item><FormDemo2/></Item>
  </Grid>
  <Grid item xs={6} md={12}>
    <Item><FormDemo1/></Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item><FormDemo4/></Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item><State/></Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item><Zip/></Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item> <Country/></Item>
  </Grid>
  <Grid item xs={6} md={12}>
    <Item><Boxcomp/></Item>
  </Grid>
  
</Grid>
</ErrorBoundary>
    
    
    
    
   
    </div>
  );
}

export default App;
