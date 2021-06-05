import axios from 'axios';

export const url = "https://reddit-clone-backend-gb10.herokuapp.com";

export const fetchData = async() => {
    try {
        const { data}  = await axios.get(`${url}/post/all`);
        const modifiedData = data.map(posts => ({   
            postId: posts.postId,
            postTitle:posts.postTitle,
            postDesc: posts.postDesc ,
            UserId:posts.user.UserId
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}
