import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'nameExtractor'})

export class NameExtractorPipe implements PipeTransform {
  transform(value: string, type:string): string {
    const splitted = value?.split(' ');
    if(!splitted || !splitted.length) return value;
    
    if(type === 'firstName') return splitted[0];
    else if(type === 'lastName') return splitted[splitted.length-1]
    else return value;
  }
}
