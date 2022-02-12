import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'fallback'
})
export class FallbackPipe implements PipeTransform {
  transform(value: any, fallbackValue: any, mode?: 'null' | 'falsy') {
    return mode == 'falsy'
      ? value || fallbackValue
      : value ?? fallbackValue;
  }
}