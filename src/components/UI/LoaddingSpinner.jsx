import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    spinnerDiv:{
        textAlign:"center"
    }
})

const LoaddingSpinner = () =>{
    const classes = useStyles();
    return(
      <div className={classes.spinnerDiv}>
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80}/>
      </div>
    );
}

export default LoaddingSpinner;