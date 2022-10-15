import * as React from 'react';
import {useContext,useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import insta from '../assets/helo1.png';
import { makeStyles } from '@mui/styles';
import { color } from '@mui/system';
import { grey } from '@mui/material/colors';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {Link,useNavigate} from 'react-router-dom';
import './Login.css';
import bg from '../assets/phone2.jpg';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import { Authcontext } from '../context/Authcontext';

export default function Login() {
  const store = useContext(Authcontext)
  console.log(store)
  // const useStyles = makeStyles({
  //   text1: {
  //     color:'grey',
  //     textAlign:'center'
  //   }
  // })
  // const classes = useStyles();
  // const [email,setEmail] = useState('');
  // const [password,setPassword] = useState('');
  // const [error,setError] = useState('');
  // const [loading,setLoading] = useState(false);
  // const history = useNavigate(); 
  // const {Login} = useContext(Authcontext);

  // const handleClick = async() => {
  //   try{
  //     setError('');
  //     setLoading(true);
  //     let res = await Login(email, password);
  //     setLoading(false);
  //     history.push('/')
  //   }
  //   catch(err){
  //     setError(err);
  //     setTimeout(()=>{
  //       setError('');
  //     }, 2000);
  //     setLoading(false);
  //   }
  // }

  return (
    <div className="loginWrapper">
        <div className="imgcar" style={{backgroundImage:'url('+bg+')',backgroundSize:'cover'}}>
            <div className="car">
            <CarouselProvider
             visibleSlides={1}
             naturalSlideWidth={100}
             naturalSlideHeight={125}
             totalSlides={5}
             isPlaying={true}
             infinite={true}
             dragEnabled={false}
             touchEnabled={false}
             hasMasterSpinner
      >
            <Slider>
                <Slide index={0}><Image src={img1} /></Slide>
                <Slide index={1}><Image src={img2} /></Slide>
                <Slide index={2}><Image src={img3} /></Slide>
                <Slide index={3}><Image src={img4} /></Slide>
                <Slide index={4}><Image src={img5} /></Slide>
                 
                </Slider>
            </CarouselProvider>
            </div>
        </div>

              <div className="loginCard">
      <Card varient="outlined">
          <div className="insta-logo">
              <img src={insta} alt="" />
          </div>
           
           <CardContent>

             

           <Alert severity="error">This is an error alert — check it out!</Alert>
             
             <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" />
             <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" />
             
             <Typography color="primary" textAlign="center" variant="subtitle1" >
                Forget Password ?
             </Typography>

           </CardContent>
      
      <CardActions>
        <Button color="primary" fullWidth={true} variant="contained" >
          Log in
        </Button>
      </CardActions>

     
      
    </Card>
    <Card variant="outlined" className="Card2" color="text.secondary" textAlign="center" varient="subtitle1">
             <CardContent>

                <Typography color="text.secondary" textAlign="center" variant="subtitle1" >
                   Don't have an account ? <Link to="/signup" style={{textDecoration:'none'}}>Signup</Link>
                </Typography>

              </CardContent>
    </Card>
      </div>
    </div>
   
  );
}
