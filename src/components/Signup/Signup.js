import './Signup.css';
import SignupChild from './Signup-Child';
import image from '../../images/carimage.png'

const Signup = () => {

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <SignupChild/>
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={image} alt="image"></img>
        </div>
      </div>

    </div>

  )
}

export default Signup;