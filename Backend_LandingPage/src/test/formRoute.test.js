const server = require('../index');
const formularioModel = require('../models/formulario.model');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);
const {uExitoso, uFallidoNombre, uFallidoDocumento, uFallidoEmail} = require('./usuariosPrueba.test');

describe('Test formulario',()=>{

    describe('POST formulario /api de forma exitosa',()=>{
        it('Debe devolver un estado HTTTP 201',(done)=>{
            chai.request(server)
                .post('/api')
                .send(uExitoso)
                .end((err,res)=>{
                    res.should.has.status(201);
                    done();
                })
        })
    })

    describe('POST formulario /api de forma fallida por mal documento',()=>{
        it('Debe devolver un estado HTTTP 400',(done)=>{
            chai.request(server)
                .post('/api')
                .send(uFallidoDocumento)
                .end((err,res)=>{
                    console.log(res.body);
                    res.should.has.status(400);
                    done();
                })
        })
    })

    describe('POST formulario /api de forma fallida por mal nombre',()=>{
        it('Debe devolver un estado HTTTP 400',(done)=>{
            chai.request(server)
                .post('/api')
                .send(uFallidoNombre)
                .end((err,res)=>{
                    console.log(res.body);
                    res.should.has.status(400);
                    done();
                })
        })
    }) 
    
 
    describe('POST formulario /api de forma fallida por mal email',()=>{
        it('Debe devolver un estado HTTTP 400',(done)=>{
            chai.request(server)
                .post('/api')
                .send(uFallidoEmail)
                .end((err,res)=>{
                    console.log(res.body);
                    res.should.has.status(400);
                    done();
                })
        })
    })  
    
    describe('POST formulario /api de forma fallida duplicidad documento',()=>{
        it('Debe devolver un estado HTTTP 409',(done)=>{
            chai.request(server)
                .post('/api')
                .send(uExitoso)
                .end((err,res)=>{
                    console.log(res.body);
                    res.should.has.status(409);
                    done();
                })
        })
        //ELIMINAMOS EL PRIMERO QUE SE CREÓ
        after(async()=>{
            await formularioModel.destroy({where:{documento: uExitoso.documento}});
        })
        
    })      

});
