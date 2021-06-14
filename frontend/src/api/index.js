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

export const feathpostdata= async(id)=>{
    try{
        const {data}=await axios.get(`${url}/post/${id}`)
        return data;

    }catch (error) {
        console.log(error);
    }
}


export const fetchcommentData = async(id) => {
    try {
        const { data}  = await axios.get(`${url}/post/${id}/comments`);
        
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const sendcomment=async(comment,pid,uid)=>{
    var commentdata = {
      comment: comment,
    };
    console.log(commentdata);
    try{
        const res=await axios.post(`${url}/${uid}/post/${pid}/comment/create`, commentdata)
        console.log(res.data);
        return true;
    }
    catch(err){
        console.log("error")
        return false;
    }

       
    
}