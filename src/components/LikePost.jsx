import FavoriteIcon from '@mui/icons-material/Favorite';

function LikePost(props) {
    return (
      <button onClick={props.onClick}><FavoriteIcon></FavoriteIcon></button>
    );
  }

export default LikePost;