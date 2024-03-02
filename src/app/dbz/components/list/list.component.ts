import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 1000
  }]

  @Output()
  public onDelete: EventEmitter<string> = new  EventEmitter();

  onDeleteCharacter( id?: string):void {

    if( !id ) return;

    this.onDelete.emit( id );
  }

}
