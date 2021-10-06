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
            const noticeList = responseNotice.data.dtoList.map(list => {
                return{
                    postNum: list.idx,
                    postTitle: list.title,
                    postContent: list.content,
                    userId: list.name,
                    postDate: list.regDate,
                    views: list.views,
                };
            });
            const qnaList = responseQnA.data.dtoList.map(list => {
                return{
                    postNum: list.idx,
                    postTitle: list.title,
                    postContent: list.content,
                    userId: list.userId,
                    postDate: list.regDate,
                    views: list.views,
                };
            });
            console.log("notice: " + noticeList);
            setNoticeListData(noticeList);
            setQnaListData(qnaList);
        }catch (error) {
            setError(error.message);
        }
    }, []);

    useEffect( ()=>{
        boardDataAxiosHandler();
    }, [boardDataAxiosHandler]);

    return [noticeListData, qnaListData];
};
