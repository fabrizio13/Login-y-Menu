import { Component, OnInit, Input } from '@angular/core';
import Menu from './Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    {
      id: 1,
      icon: null,
      name: "Lotes",
      route: "/home",
      active: false,
      menus: [
        {
          id: 6,
          icon: null,
          name: "Lotes de latas vacías",
          route: "/",
          active: false,
          menus: []
        },
        {
          id: 7,
          icon: null,
          name: "Lotes de materia prima",
          route: "/",
          active: false,
          menus: []
        }
      ]
    },
    {
      id: 2,
      icon: null,
      name: "Trabajadores",
      route: null,
      active: false,
      menus: [ ]
    },
    {
      id: 3,
      icon: null,
      name: "Informes",
      route: null,
      active: false,
      menus: [
        {
          id: 8,
          icon: null,
          name: "Informes diarios",
          route: "/",
          active: false,
          menus: []
        },
        {
          id: 9,
          icon: null,
          name: "Informes mensuales",
          route: "/",
          active: false,
          menus: []
        }
      ]
    },
    {
      id: 4,
      icon: null,
      name: "Distribución",
      route: null,
      active: false,
      menus: [
        {
          id: 10,
          icon: null,
          name: "Comprobante de despacho",
          route: "/",
          active: false,
          menus: []
        },
        {
          id: 11,
          icon: null,
          name: "Puntos de venta",
          route: "/",
          active: false,
          menus: []
        }
      ]
    },
    {
      id: 5,
      icon: null,
      name: "Productos",
      route: null,
      active: false,
      menus: []
    },
    {
      id: 12,
      icon: null,
      name: "Proveedor",
      route: null,
      active: false,
      menus: [
        {
          id: 13,
          icon: null,
          name: "Proveedores",
          route: "/",
          active: false,
          menus: []
        },
        {
          id: 14,
          icon: null,
          name: "Comprobante de materia prima",
          route: "/",
          active: false,
          menus: []
        }
      ]
    },
    {
      id: 15,
      icon: null,
      name: "Respaldo total",
      route: null,
      active: false,
      menus: []
    },
  ];

  constructor() { }

  ngOnInit() { }

  public thisMenuHaveMoreMenus(menu: Menu): boolean {
    return menu.menus.length > 0;
  }

  expand(id: any): void {
    this.menus = this.menus.map(menu => {

      if (menu.id === id) {
        menu.active = !menu.active;
      } else {
        menu.active = false;
      }
      return menu;
    })
  }

}
