import {useRouter} from "next/router";
import { useEffect,useState } from "react";
import {FaHome} from "react-icons/fa";
import { apiMateria } from "../../api/data";
import {IMateria} from "../../interfaces/Materia.interface";
import {Link} from "../../styles";


const Header = () =>{
 const router=useRouter();
 const [materias, setMaterias]=useState<IMateria[]>([]);

 useEffect(() => {
     const fetchData=async()=>{
        const response = await apiMateria.index();
        setMaterias(response.data);
     };
     fetchData();
 }, [])
    return (
        <div className="container">
            <FaHome onClick={()=> router.push('/')}/>
            {materias && materias.map((item)=>{
                <Link key={item.id} href={`/${item.id}`}>
                    {item.nome}
                </Link>
            })}
        </div>
    );
 
};
export default Header;