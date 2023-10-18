import {useParams} from "react-router-dom";
import data from "../database/data.json"
import Company from "./Company";
import { useEffect, useState } from "react";
import UseFetch from "./UseFetch";

const RecruitInfor = ()=>{
    // let day =2;
    //url로 부터 '/word/day' 정보를 받아서 useParams 이용 day 변수네 저장

    const {id} = useParams();
    const companyList = UseFetch("http://localhost:3001/companys?id=" + id);
    return (
        <div>
            <ul>
                    {
                        companyList.map((company)=>{
                            return (
                                
                                // <tr key={word.id}>
                                //     <td>{word.eng}</td>
                                //     <td>{word.kor}</td>
                                // </tr>
                                <Company company={company} key={company.id} />
                            )
                        })
                    }
</ul>
        </div>
    )
}
export default RecruitInfor;