import { connect }  from 'react-redux';
import NavBar from './NavBar';

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated,
  isLoading: user.isLoading
});

export default connect(
  mapStateToProps
)(NavBar); 

