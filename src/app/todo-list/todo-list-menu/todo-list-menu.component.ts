import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

enum MenuType {
  TODAY = 'today',
  PENDING = 'pending',
  COMPLETED = 'completed',
}

const MENUS: { title: string; value: MenuType }[] = [
  { title: 'Today', value: MenuType.TODAY },
  { title: 'Pending', value: MenuType.PENDING },
  { title: 'Completed', value: MenuType.COMPLETED },
];

@Component({
  selector: 'app-todo-list-menu',
  imports: [CommonModule],
  templateUrl: './todo-list-menu.component.html',
  styleUrl: './todo-list-menu.component.scss',
})
export class TodoListMenuComponent {
  menus = MENUS;
  selectedMenu: MenuType = MenuType.TODAY;

  isActive(menu: MenuType) {
    return this.selectedMenu === menu;
  }

  selectMenu(menu: MenuType) {
    this.selectedMenu = menu;
  }
}
