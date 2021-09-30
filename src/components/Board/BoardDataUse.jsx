import {useCallback, useEffect, useState} from "react";
import axios from "axios";

export const BoardDataUse = () =>{
    const [noticeList, setNoticeList] = useState([]);
    const [qnaList, setQnaList] = useState([]);
    const [error, setError]               = useState(null);

    const boardDataAxiosHandler= useCallback(async () => {
        setError(null);

        try{
            const responseNotice  = await axios.get("http://localhost:8089/notice");
            const responseQnA     = await axios.get("http://localhost:8089/qna");
            if(responseNotice.status !== 200 || responseQnA.status !== 200){
                throw new Error("Something went wrong!");
            }
            console.log(responseNotice.data);
            console.log(responseQnA.data);
            const noticeList = responseNotice.data.map(list => {
                return{
                    postNum: list.postN,
                    postTitle: list.title,
                    userId: list.userId,
                    postDate: list.postDate,
                };
            });
            const qnaList = responseQnA.data.map(list => {
                return{
                    postNum: list.postN,
                    postTitle: list.title,
                    userId: list.userId,
                    postDate: list.postDate,
                };
            });
            setNoticeList(noticeList);
            setQnaList(qnaList);
        }catch (error) {
            setError(error.message);
        }
    }, []);

    useEffect( ()=>{
        boardDataAxiosHandler();
    }, [boardDataAxiosHandler]);

    return [noticeList, qnaList];
};
