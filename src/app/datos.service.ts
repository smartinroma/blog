import { Injectable } from '@angular/core';
import { Publicacion } from './publicacion';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  arrPublicaciones: Publicacion[]

  constructor() {
    if (localStorage.getItem('publicaciones')) {
      this.arrPublicaciones = JSON.parse(localStorage.getItem('publicaciones'))
    } else {
      this.arrPublicaciones = []
    }
    //this.arrPublicaciones = []

  }


  agregarPost(pPost: Publicacion): Promise<string> {
    return new Promise((resolve, reject) => {
      this.arrPublicaciones.push(pPost);
      localStorage.setItem('publicaciones', JSON.stringify(this.arrPublicaciones))
      resolve('Publicación añadida')
    })
  }


  getAllPost(): Promise<Publicacion[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPublicaciones);
    })
  }


  getPostByCategoria() { }


  borrarPost(pIndice: number) {
    this.arrPublicaciones.splice(pIndice, 1)
    localStorage.setItem('publicaciones', JSON.stringify(this.arrPublicaciones))
  }


}
