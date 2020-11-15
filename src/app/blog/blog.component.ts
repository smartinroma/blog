import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { Publicacion } from '../publicacion';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  publicaciones: Publicacion[];

  constructor(private blogService: DatosService) {
    this.publicaciones = [];
  }

  ngOnInit(): void {
    this.blogService.getAllPost()
      .then(arrPublicaiones => {
        this.publicaciones = arrPublicaiones
      })
  }

  onClickBorrar(pIndice: number) {
    this.blogService.borrarPost(pIndice)
  }

}
