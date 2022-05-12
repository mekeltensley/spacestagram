import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

function UnlikePost(props) {
    return (
      <button onClick={props.onClick}><HeartBrokenIcon style={{ fontSize: "30px", color: "#D84727"}}></HeartBrokenIcon></button>
    );
  }

export default UnlikePost;