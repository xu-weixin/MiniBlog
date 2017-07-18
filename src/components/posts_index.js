import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, post => <li className="list-group-item" key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>);
  }

  render(){
    return(
      <div>
        <div className="text-right">
          <Link className="btn btn-primary" to="/posts/new">
            创建新文章
          </Link>
        </div>
        <h3>文章列表</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts
  };
}

// function mapDispatchToProps(dispatch){
//   return {
//     fetchPosts: () => {
//       dispatch(fetchPosts())
//     }
//   };
// }

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
