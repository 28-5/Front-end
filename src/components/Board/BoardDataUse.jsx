import {useCallback, useEffect, useState} from "react";
import axios from "axios";

export const BoardDataUse = () =>{
    const [noticeListData, setNoticeListData] = useState([]);
    const [qnaListData, setQnaListData]       = useState([]);
    const [error, setError]                   = useState(null);

    const boardDataAxiosHandler= useCallback(async () => {
        setError(null);

        try{
            const responseNotice  = await axios.get("/notice");
            const responseQnA     = await axios.get("/qna");
            if(responseNotice.status !== 200 || responseQnA.status !== 200){
                throw new Error("Something went wrong!");
            }
            console.log(responseNotice.data);
            console.log(responseQnA.data);
            const noticeList = responseNotice.data.map(list => {
                return{
                    postNum: list.idx,
                    postTitle: list.title,
                    postContent: list.content,
                    userId: list.name,
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
            setNoticeListData(noticeList);
            setQnaListData(qnaList);
            console.log("boardData: " + noticeListData + ", " + qnaListData);
        }catch (error) {
            setError(error.message);
        }
    }, []);

    useEffect( ()=>{
        boardDataAxiosHandler();
    }, [boardDataAxiosHandler]);

    return [noticeListData, qnaListData];
};
