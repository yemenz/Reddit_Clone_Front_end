import React from 'react';
import './comments.css';
import CommentArea from './CommentArea';
import { feathpostdata, sendcomment } from '../../api/index';

class Comment extends React.Component {
  state = {
    posttitle: '',
    postdesc: '',
    postuserid: '',
    postpostid: 0,
    comment: '',
  };

  componentDidMount = async () => {
    let pid = null;
    console.log('hi');
    console.log(this.props.postid === '');

    if (this.props.postid === '') {
      pid = sessionStorage.getItem('pid');
      
    } else {
      sessionStorage.setItem('pid', this.props.postid);
      pid = this.props.postid;
    }
    this.setState({postpostid: pid})
    const data = await feathpostdata(pid);
    this.setState({
      posttitle: data.postTitle,
      postdesc: data.postDesc,
      postuserid: data.user,
      postpostid: data.postId,
    });
  };

  submitdata = async (e) => {
    e.preventDefault();
    const comment = document.getElementById('comment_').value;
    const { postpostid } = this.state;
    const cnt = await sendcomment(comment, postpostid);
    console.log(cnt);
    if (cnt) {
      this.setState({ postpostid: postpostid });
    window.location="./comments";
    }
    
  };
  render() {
    const { posttitle, postdesc, postuserid, postpostid } = this.state;
    return (
      <div className='total'>
        <div className='heading'></div>
        <center>
          <div className='content'>
            <div className='userId'>
              <span>{postuserid}</span> / <span>{postpostid}</span>
              <br />
            </div>
            <div className='title'>
              <span>{posttitle}</span>
              <br />
            </div>
            <div className='desc'>
              <span>Description:</span>
              <br />
            </div>
            <div className='data'>
              <span>{postdesc}</span>
            </div>
            <br></br>
            <br></br>
            <form
              className='commentkaro'
              onSubmit={this.submitdata}
              method='POST'>

              <input
                className='comment'
                placeholder='comment..'
                name='comment'
                id='comment_'
                onChange={this.handledlecommentdata}
              />
              <div className='problem'>
                <button className='submit007'>Comment</button>
              </div>
            </form>
          </div>
        </center>
        <center>
          <CommentArea postid={sessionStorage.getItem("pid")} />
        </center>
      </div>
    );
  }
}

export default Comment;
