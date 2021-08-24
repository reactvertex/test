import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { showJsonDataRequest } from "../Redux/action/index";
function Page (){
  const dispatch = useDispatch();
  const QuestionnairesStatus = useSelector((state) => state);
   console.log(QuestionnairesStatus,"QuestionnairesStatus");
   useEffect(() =>{
    dispatch(showJsonDataRequest());
   },[])

    return(
        <div>
            dfg
        </div>
    )
}
export default Page;