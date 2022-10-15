import * as React from 'react';
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
import './SignUp.css';
import {useState, useContext} from 'react';
import { Authcontext } from '../context/Authcontext';
import { async } from '@firebase/util';
import { database,storage } from '../firebase';

export default function Signup() {
  // const useStyles = makeStyles({
  //   text1: {
  //     color:'grey',
  //     textalign:'center'
  //   }
  // })
  // const classes = useStyles();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  const [file,setFile] = useState(null);
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);
  const history = useNavigate(); 
  const {signup} = useContext(Authcontext);

  const handleClick = async() => {
    if(file == null){
      setError("Please upload profile image first");
      setTimeout(()=>{
        setError('')
      }, 2000)
      return;
    }
    
    try{
      setError('')
      setLoading(true)
      let userObj = await signup(email,password)
      let uid = userObj.user.uid
      // console.log(uid);
      const uploadTask = storage.ref('/users/${uid}/ProfileImage').put(file);
      uploadTask.on('state_changed',fn1,fn2,fn3);
      function fn1(snapshot){
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ${progress} done.')
      }
      function fn2(error){
        setError(error);
      setTimeout(()=>{
        setError('')
      }, 2000)
      setLoading(false)
      return;
        

      }
      function fn3(){
        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
          console.log(url);
          database.users.doc(uid).set({
            email:email,
            userId:uid,
            name:name,
            profileUrl:url,
            createdAt:database.serverTimestamp,
          })
        })
        setLoading(false);
        history.push('/')

      }

    }
    catch(err){
      setError(err);
      setTimeout(()=>{
        setError('')
      }, 2000)
      return;
    }
    
  }

  return (
    <div className="signupWrapper">
      <div className="signupCard">
      <Card varient="outlined">
          <div className="insta-logo">
              <img src={insta} alt="" />
          </div>
           
           <CardContent>
             <Typography color="text.secondary" textalign="center" variant="subtitle1" >
               Sign up to see photos and videos from your friends.
             </Typography>

             {error!='' && <Alert severity="error">{error}</Alert>}
             
             <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)}/>
             <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" value={password} onChange={(e)=>setPassword(e.target.value)}/>
             <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth={true} margin="dense" size="small" value={name} onChange={(e)=>setName(e.target.value)}/>

             <Button size="small" color="secondary" fullWidth={true} variant="outlined" margin="small" component="label">
                  Upload Profile Image
                  <input type="file" accept="videos/*" hidden onChange={(e)=>setFile(e.target.files[0])}/>
             </Button>

           </CardContent>
      
      <CardActions>
        <Button color="primary" fullWidth={true} variant="contained" disabled={loading} onClick={handleClick}>
          Sign up
        </Button>
      </CardActions>

      <CardContent>

             <Typography color="text.secondary" textalign="center" variant="subtitle1" >
                By signing up, you agree to our Terms, Data Policy and Cookies Policy.
             </Typography>

           </CardContent>
      
    </Card>
    <Card variant="outlined" className="Card2" color="text.secondary" textalign="center" varient="subtitle1">
             <CardContent>

                <Typography color="text.secondary" textalign="center" variant="subtitle1" >
                   Having an account ? <Link to="/login" style={{textDecoration:'none'}}>Login</Link>
                </Typography>

              </CardContent>
    </Card>
      </div>
    </div>
   
  );
}
