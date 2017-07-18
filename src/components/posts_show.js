import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component{
  componentDidMount(){
    if(!this.props.post){
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  onDeleteClick(){
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render(){
    const { post } = this.props;

    if(!post){
      return <div>Loading...</div>;
    }

    return(
      <div>
        <div className="text-right">
          <Link className="btn btn-primary" to={`/posts/${this.props.match.params.id}/edit`}>编辑</Link>
          <Link to="/"　className="btn btn-outline-primary">回到首页</Link>
          <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this)}>删除文章</button>
        </div>
        <h3>{post.title}</h3>
        <h6>Categories:<span className="badge badge-info">{post.categories}</span></h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps){
  return {
    post: posts[ownProps.match.params.id]
  };
}

function mapDispatchToProps(dispatch){
  return {
    fetchPost: id => {
      dispatch(fetchPost(id));
    }
  }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
