import React, { Component } from "react";
import "./Navbar.css";

class Photo extends Component {
  render() {
    return <article className="Post" ref="Post">
          <header>
            <div className="Post-user">
              <div className="Post-user-profilepicture">
                <img
                  src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg"
                  alt="John D. Veloper"
                />
              </div>

              <div className="Post-user-nickname">
                <span>John Doe</span>
              </div>
            </div>
          </header>

          <div className="Post-image">
            <div className="Post-image-bg">
              <img
                alt="Icon Living"
                src="[https://cdn-images-1.medium.com/max/1200/1*dMSWcBZCuzyRDeMr4uE_og.png]"
              />
            </div>
          </div>

          <div className="Post-caption">
            <strong>John D. Veloper </strong> Loving Educative!
          </div>
        </article>;
  }
}

export default Photo;

// class Timeline extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <div class="columns body-columns">
//           <div class="column is-half is-offset-one-quarter">
//             <div className="title">
//               <h1>{this.props.title}</h1>
//             </div>

//             <figure className="hover-image">
//               <div class="card">
//                 <div class="card-image">
//                   <figure class="image is-4by3">
//                     <img
//                       src="https://s3media.247sports.com/Uploads/Assets/641/268/9268641.jpg?fit=bounds&crop=1200:630,offset-y0.50&width=1200&height=630"
//                       alt="Lousiana State University "
//                     />
//                   </figure>
//                 </div>
//                 <div class="card-content">
//                   <div class="content">
//                     <div class="header">
//                       <div class="media">
//                         <div class="media-content">
//                           <p class="name">{this.props.name}</p>
//                           <p class="type">{this.props.type}</p>
//                         </div>
//                       </div>
//                     </div>
//                     <p className="height">
//                       {this.props.height} | {this.props.class}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </figure>

//             <figure className="hover-image">
//               <div class="card">
//                 <div class="card-image">
//                   <figure class="image is-4by3">
//                     <img
//                       src="https://s3media.247sports.com/Uploads/Assets/641/268/9268641.jpg?fit=bounds&crop=1200:630,offset-y0.50&width=1200&height=630"
//                       alt="Lousiana State University "
//                     />
//                   </figure>
//                   <figcaption>
//                     <button type="submit">Full Bio</button>
//                   </figcaption>
//                 </div>
//                 <div class="card-content">
//                   <div class="content">
//                     <div class="header">
//                       <div class="media">
//                         <div class="media-content">
//                           <p class="name">{this.props.name}</p>
//                           <p class="type">{this.props.type}</p>
//                         </div>
//                       </div>
//                     </div>
//                     <p className="height">
//                       {this.props.height} | {this.props.class}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </figure>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Timeline;

// class Timeline extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar />
//             <div class="card">
//               <div class="header">
//                 <div class="media">
//                   <div class="media-left">
//                     <figure class="image is-48x48">
//                       <img
//                         src="https://source.unsplash.com/random/96x96"
//                         alt="Placeholder image"
//                       />
//                     </figure>
//                   </div>
//                   <div class="media-content">
//                     <p class="title is-4">John Smith</p>
//                     <p class="subtitle is-6">@johnsmith</p>
//                   </div>
//                 </div>
//               </div>
//               <div class="card-image">
//                 <figure class="image is-4by3">
//                   <img
//                     src="https://source.unsplash.com/random/1280x960"
//                     alt="Placeholder image"
//                   />
//                 </figure>
//               </div>
//               <div class="card-content">
//                 <div class="level is-mobile">
//                   <div class="level-left">
//                     <div class="level-item has-text-centered">
//                       <a href="">
//                         <i class="material-icons">favorite_border</i>
//                       </a>
//                     </div>
//                     <div class="level-item has-text-centered">
//                       <div>
//                         <a href="">
//                           <i class="material-icons">chat_bubble_outline</i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="content">
//                   <p>
//                     <strong>32 Likes</strong>
//                   </p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Phasellus nec iaculis mauris.
//                   <a>@bulmaio</a>.<a href="#">#css</a>
//                   <a href="#">#responsive</a>
//                   <br />
//                   <time datetime="2018-1-1">11:09 PM - 1 Jan 2018</time>
//                 </div>
//               </div>
//               <div class="card-footer">
//                 <div class="columns is-mobile">
//                   <div class="column is-11">
//                     <div class="field">
//                       <div class="control">
//                         <input
//                           class="input is-medium"
//                           type="text"
//                           placeholder="Add a comment . . ."
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div class="column has-text-centered">
//                     <button class="button">
//                       <i class="material-icons">more_horiz</i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="card">
//               <div class="header">
//                 <div class="media">
//                   <div class="media-left">
//                     <figure class="image is-48x48">
//                       <img
//                         src="https://source.unsplash.com/random/96x96"
//                         alt="Placeholder image"
//                       />
//                     </figure>
//                   </div>
//                   <div class="media-content">
//                     <p class="title is-4">John Smith</p>
//                     <p class="subtitle is-6">@johnsmith</p>
//                   </div>
//                 </div>
//               </div>
//               <div class="card-image">
//                 <figure class="image is-4by3">
//                   <img
//                     src="https://source.unsplash.com/random/1280x960"
//                     alt="Placeholder image"
//                   />
//                 </figure>
//               </div>
//               <div class="card-content">
//                 <div class="level is-mobile">
//                   <div class="level-left">
//                     <div class="level-item has-text-centered">
//                       <a href="">
//                         <i class="material-icons">favorite_border</i>
//                       </a>
//                     </div>
//                     <div class="level-item has-text-centered">
//                       <div>
//                         <a href="">
//                           <i class="material-icons">chat_bubble_outline</i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="content">
//                   <p>
//                     <strong>32 Likes</strong>
//                   </p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Phasellus nec iaculis mauris.
//                   <a>@bulmaio</a>.<a href="#">#css</a>
//                   <a href="#">#responsive</a>
//                   <br />
//                   <time datetime="2018-1-1">11:09 PM - 1 Jan 2018</time>
//                 </div>
//               </div>
//               <div class="card-footer">
//                 <div class="columns is-mobile">
//                   <div class="column is-11">
//                     <div class="field">
//                       <div class="control">
//                         <input
//                           class="input is-medium"
//                           type="text"
//                           placeholder="Add a comment . . ."
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div class="column has-text-centered">
//                     <button class="button">
//                       <i class="material-icons">more_horiz</i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="card">
//               <div class="header">
//                 <div class="media">
//                   <div class="media-left">
//                     <figure class="image is-48x48">
//                       <img
//                         src="https://source.unsplash.com/random/96x96"
//                         alt="Placeholder image"
//                       />
//                     </figure>
//                   </div>
//                   <div class="media-content">
//                     <p class="title is-4">John Smith</p>
//                     <p class="subtitle is-6">@johnsmith</p>
//                   </div>
//                 </div>
//               </div>
//               <div class="card-image">
//                 <figure class="image is-4by3">
//                   <img
//                     src="https://source.unsplash.com/random/1280x960"
//                     alt="Placeholder image"
//                   />
//                 </figure>
//               </div>
//               <div class="card-content">
//                 <div class="level is-mobile">
//                   <div class="level-left">
//                     <div class="level-item has-text-centered">
//                       <a href="">
//                         <i class="material-icons">favorite_border</i>
//                       </a>
//                     </div>
//                     <div class="level-item has-text-centered">
//                       <div>
//                         <a href="">
//                           <i class="material-icons">chat_bubble_outline</i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="content">
//                   <p>
//                     <strong>32 Likes</strong>
//                   </p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Phasellus nec iaculis mauris.
//                   <a>@bulmaio</a>.<a href="#">#css</a>
//                   <a href="#">#responsive</a>
//                   <br />
//                   <time datetime="2018-1-1">12:02 PM - 1 May 2018</time>
//                 </div>
//               </div>
//               <div class="card-footer">
//                 <div class="columns is-mobile">
//                   <div class="column is-11">
//                     <div class="field">
//                       <div class="control">
//                         <input
//                           class="input is-medium"
//                           type="text"
//                           placeholder="Add a comment . . ."
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div class="column has-text-centered">
//                     <button class="button">
//                       <i class="material-icons">more_horiz</i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <footer class="footer">
//               <div class="container is-fluid">
//                 <div class="content has-text-centered">
//                   <p>
//                     <strong>Spacetagram</strong> by
//                     <a href="http://jgthms.com">Jeremy Thomas</a>. The source
//                     code is licensed
//                     <a href="http://opensource.org/licenses/mit-license.php">
//                       MIT
//                     </a>
//                     . The website content is licensed
//                     <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
//                       CC BY NC SA 4.0
//                     </a>
//                     .
//                   </p>
//                 </div>
//               </div>
//             </footer>
//           </div>
//     );
//   }
// }

// export default Timeline;
