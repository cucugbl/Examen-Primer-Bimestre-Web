import {Controller, Get, Post, Put, Req, Res} from "@nestjs/common";
import {Component} from "@nestjs/common/utils/decorators/component.decorator";
import {soService} from "./so.service";


@Controller('SO')
export class SistemaOperativoController {
    constructor(private _so: soService){}
    @Post()
    anadirSO(@Req() req, @Res() res) {
        const anadirSO = new sistemaOperativo(
            req.body.nombre,
            req.body.versionApi,
            req.body.fechaLanzamiento,
            req.body.pesoGigas,
            req.body.instalado);


        this._so.anadirSO(anadirSO);
        return res.send({mensaje: 'creado',status: 200});
    }

    @Get()
    listarTodos(@Res() res) {
        return res.status(200).send(this._so.listaTodos());
    }
    @Get('/:id')
    obtenerUno(@Req() req,
               @Res() res){
        const sistemaOperativo = this._so.obtenerUno(req.params.id);
        if (sistemaOperativo){
            return res.status(200).send(sistemaOperativo);
        } else {
          //  throw new PeticionNotFoundExeptions('no existe','En so no se encuentra intenta de nuevo',4);
        }

    }

    @Put('/:id')
    editarUno(@Req() req,
              @Res() res){
        const sistemaOperativo = this._so.editarUno(
            req.params.id,
            req.body.nombre,
            req.body.versionApi,
            req.body.fechaLanzamiento,
            req.body.pesoGigas,
            req.body.instalado);
        return res.status(200).send(sistemaOperativo);
    }

}

export class sistemaOperativo {
    constructor(public nombre: string,
                public versionApi: number,//falta hacer entero
                public fechaLanzamiento: string,
                public pesoGigas: number, //falta hcer decimal
                public instalado: boolean
    ) {
    }
}


