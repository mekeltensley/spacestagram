import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

function UnlikePost(props) {
    return (
      <button onClick={props.onClick}><HeartBrokenIcon></HeartBrokenIcon></button>
    );
  }

export default UnlikePost;