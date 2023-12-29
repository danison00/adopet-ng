import { HostListener, Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  dogs: Animal[] = [
    {
      imgPath: 'https://media.istockphoto.com/id/1482199015/pt/foto/happy-puppy-welsh-corgi-14-weeks-old-dog-winking-panting-and-sitting-isolated-on-white.jpg?s=612x612&w=0&k=20&c=XI-fFXTXEU4UbQtGwM_vWzBB4F17W4dlPtXL4wr2dmE=',
      nome: 'Max',
      sexo: 'Masculino',
      idade: 2,
      castrado: true,
      cuidadosEspeciais: false,
      caracteristica: 'Orelhas pontudas',
      descricao: 'Um buldogue brincalhão.'
    },
    // {
    //   imgPath: 'https://www.portaldodog.com.br/cachorros/wp-content/uploads/2020/03/dachshund-de-cachorro-na-grama_78621-2721.jpg',
    //   nome: 'Luna',
    //   sexo: 'Feminino',
    //   idade: 1,
    //   castrado: false,
    //   cuidadosEspeciais: true,
    //   caracteristica: 'Pelagem longa',
    //   descricao: 'Uma husky siberiana com olhos azuis deslumbrantes.'
    // },
    {
      imgPath: 'https://www.tendaatacado.com.br/dicas/wp-content/uploads/2023/04/topo-como-tirar-pelo-de-gato-do-sofa.jpg',
      nome: 'Charlie',
      sexo: 'Masculino',
      idade: 2,
      castrado: false,
      cuidadosEspeciais: false,
      caracteristica: 'Manchas pretas',
      descricao: 'Um dálmata amigável e energético.'
    },
    {
      imgPath: 'https://www.petsupport.com.br/wp-content/uploads/2021/09/necessidades-dos-gatos-1-1024x576.jpg',
      nome: 'Lucy',
      sexo: 'Feminino',
      idade: 4,
      castrado: true,
      cuidadosEspeciais: false,
      caracteristica: 'Cauda peluda',
      descricao: 'Uma vira-lata adorável.'
    },
    {
      imgPath: 'https://walac.pe/wp-content/uploads/2021/02/gato-marron_0.jpg',
      nome: 'Cooper',
      sexo: 'Masculino',
      idade: 2,
      castrado: false,
      cuidadosEspeciais: true,
      caracteristica: 'Olhos castanhos',
      descricao: 'Um golden retriever brincalhão.'
    },
    {
      imgPath: 'https://blog-static.petlove.com.br/wp-content/uploads/2021/07/Dachshund-filhote-3.jpg',
      nome: 'Mia',
      sexo: 'Feminino',
      idade: 3,
      castrado: true,
      cuidadosEspeciais: false,
      caracteristica: 'Patas grandes',
      descricao: 'Uma pastor alemã inteligente.'
    },
    {
      imgPath: 'data:image/jpeg;base64,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',
      nome: 'Rocky',
      sexo: 'Masculino',
      idade: 5,
      castrado: false,
      cuidadosEspeciais: false,
      caracteristica: 'Focinho curto',
      descricao: 'Um bulldog francês adorável.'
    },
    {
      imgPath: 'https://media.istockphoto.com/id/467923438/pt/foto/c%C3%A3o-rid%C3%ADculo-desloca-cabe%C3%A7a-na-frente-de-celeiro.jpg?s=1024x1024&w=is&k=20&c=DFmnUIfGCV54l4YTMxG807usK7yevrVH--8-GazcUvM=',
      nome: 'Sadie',
      sexo: 'Feminino',
      idade: 2,
      castrado: true,
      cuidadosEspeciais: false,
      caracteristica: 'Pêlo macio',
      descricao: 'Uma shih tzu alegre.'
    }
    // {
    //   imgPath: 'https://blog.casadoprodutor.com.br/wp-content/uploads/2017/11/coelho-1024x856.jpg',
    //   nome: 'Tucker',
    //   sexo: 'Masculino',
    //   idade: 3,
    //   castrado: false,
    //   cuidadosEspeciais: true,
    //   caracteristica: 'Rabo enrolado',
    //   descricao: 'Um poodle muito inteligente.'
    // }
  ]

  constructor() { }



}

