import { useHistory } from "react-router-dom";
import UseFetch from "./UseFetch";
import { useRef } from "react";
import { Link } from 'react-router-dom';

const Company = ({company, props}) => {

    const history = useHistory();

    const nameRef = useRef(null);
    const numRef = useRef(null);
    const jobRef = useRef(null);
    const limitRef = useRef(null);

    // const del =()=>{
    //     if(window.confirm("정말삭제하시겠습니까?")){
    //         fetch("http://localhost:3001/companys/"+ company.id,{
    //             method:"DELETE",
    //         }).then((res)=>{
    //             if(res.ok){
    //             history.push('/');//메인으로 이동
    //             }
    //         })
    //     }
    // }
    
    return (
            <div className="infor">
                <h1>{company.name}</h1>
                <p>채용인원: {company.num}<br/>
                채용직무: {company.job}<br/>
                기한: {company.limit}</p>
                <div>
                {/* <button onClick={}> 수정</button> */}
                <Link to={"/modify/" + company.id }className="btn_modify"> 수정 </Link>                
                <Link to={"/deleteCom/" + company.id } className="btn_del">삭제</Link>
                {/* <button onClick={del} className="btn_del">삭제</button> */}
                </div>
            </div>
    )
}
export default Company;
