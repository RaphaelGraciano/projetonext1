import api from "../../index";
import {IMateria} from "../../../interfaces/Materia.interface"
class MateriaData{
    index(){
        return api.get<IMateria[]>('materias');
    }
}

export default new MateriaData();