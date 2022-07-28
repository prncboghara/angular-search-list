import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../model/user';

@Pipe({name: 'filter'})

export class FilterPipe implements PipeTransform {
  transform(value: IUser[], txt:string): IUser[] {
    if(!value || !value.length) return value;
    return value.filter((user:IUser) => user.name.toLowerCase().includes(txt.toLowerCase()));
  }
}
