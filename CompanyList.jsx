import UseFetch from "../components/UseFetch";
import { Link } from 'react-router-dom';

const CompanyList = (company) =>{

    const companys = UseFetch("http://localhost:3001/companys");
    return (
        <div>
            <ul className='list_company'>
                {
                    // data.days.map((day)=>{
                    companys.map((company)=>{

                        return (
                            <li key={company.id}>
                                {/* Day {day.day} */}
                                {/* <Link to={'/word/'+ day.day}> */}
                                <Link to={`/companys/${company.id}`}>
                                    {company.name}<br/>
                                    채용인원 : {company.num} 명<br/>
                                    채용직무 : {company.job}<br/>
                                    기한 : {company.limit}
                                </Link>

                            </li>
                        )
                    })
                }
            </ul>


        </div>
    )
}

export default CompanyList;