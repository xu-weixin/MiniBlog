import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component{

  renderField(field){
    const { meta: { touched, error} } = field;
    const classNames = `form-group ${touched && error ? 'has-danger' : ''}`

    return(
      <div className={classNames}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-danger">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
    // values对象包含各个表单内容
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render(){
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="标题"
          name="title"
          component={this.renderField.bind(this)}
        />
        <Field
          label="分类"
          name="categories"
          component={this.renderField.bind(this)}
        />
        <Field
          label="内容"
          name="content"
          component={this.renderField.bind(this)}
        />
        <button type="submit" className="btn btn-primary">提交</button>
        <Link to="/" className="btn btn-danger">取消</Link>
      </form>
    );
  }
}

function validate(values){
  const errors = {};
  // 校验各输入框
  if(!values.title){
    errors.title = "请输入标题！"
  }
  if(!values.categories){
    errors.categories = "请输入文章分类！";
  }
  if(!values.content){
    errors.content = "请输入内容！";
  }
// 如果返回空对象，则可以提交；否则认为校验不通过，无法提交
  return errors;
}

function mapDispatchToProps(dispatch){
  return {
    createPost: (value) => {
      dispatch(createPost(value));
    }
  }
}


export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
