import FavoriteIcon from '@mui/icons-material/Favorite';

function LikePost(props) {
    return (
      <button onClick={props.onClick}><FavoriteIcon style={{ fontSize: "30px" }}></FavoriteIcon></button>
    );
  }

export default LikePost;