import { formatDate } from "@angular/common";
import { NativeDateAdapter } from "@angular/material/core";

export const PICK_FORMATS = {
  parse: {dateInput: {month: 'short', year: 'numeric', day: 'numeric'}},
  display: {
    dateInput: 'input',
    monthYearLabel: 'monthYearLabel',
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'}
  }
};

export class PickDateAdapter extends NativeDateAdapter {
  override format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input' || displayFormat === 'monthYearLabel') {
        return formatDate(date,'yyyy/MM/dd',this.locale);;
    } else {
        return date.toDateString();
    }
  }
}
