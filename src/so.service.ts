import {sistemaOperativo} from "./sistemaOperativo.controller";
import {Component} from "@nestjs/common/utils/decorators/component.decorator";


@Component()
export class soService {
    arregloSO:sistemaOperativo [] =[];

    //metodos

    anadirSO(sistemaOperativo:sistemaOperativo): sistemaOperativo[]{
        this.arregloSO.push(sistemaOperativo);
        return this.arregloSO;
    }


        listaTodos(){
            return this.arregloSO;
        }

        obtenerUno(nombreSO:string){
            const found = this.arregloSO.find(function (element:sistemaOperativo) {
                return element.nombre === nombreSO;
            });

            return found;
        }

        editarUno( id:string,
            nombre: string,
                   versionApi: number,//falta hacer entero
                   fechaLanzamiento: string,
                   pesoGigas: number, //falta hcer decimal
                   instalado: boolean){
            const editandoUno = this.obtenerUno(id);

            editandoUno.nombre = nombre,
                editandoUno.versionApi = versionApi,
                editandoUno.fechaLanzamiento = fechaLanzamiento,
                editandoUno.pesoGigas = pesoGigas,
                editandoUno.instalado = instalado;
            return editandoUno;

        }


}