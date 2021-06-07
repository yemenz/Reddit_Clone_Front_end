import axios from 'axios';

export const url = "https://reddit-clone-backend-gb10.herokuapp.com/";
//"http://localhost:8080";

export const fetchData = async() => {
    try {
        const { data}  = await axios.get(`${url}/post/all`);
        const modifiedData = data.map(posts => ({   
            postId: posts.postId,
            postTitle:posts.postTitle,
            postDesc: posts.postDesc ,
            user:posts.user
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const feathpostdata= async()=>{
    try{
        const {data}=await axios.get(`${url}/post/1`)
        console.log({data});
        return data;

    }catch (error) {
        console.log(error);
    }
}
// {
//     "commentId": 6,
//     "comment": "very nice",
//     "TIMESTAMP": "12:32:02",
//     "post": 5,
//     "user": "ballu_1",
//     "timestamp": "12:32:02"
//   }

export const fetchcommentData = async() => {
    try {
        const { data}  = await axios.get(`${url}/post/1/comments`);
        const modifiedData = data.map(comments => ({   
           commentid:comments.commentId,
           commentdesc:comments.comment,
           commentuserid:comments.user
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}