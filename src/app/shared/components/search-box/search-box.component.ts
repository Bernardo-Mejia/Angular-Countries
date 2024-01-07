import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscrition?: Subscription;

  @Input() public placeholder: string = '';
  @Input() public initialValue: string = '';
  @Output() public onValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onDebounce: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscrition = this.debouncer
      .pipe(debounceTime(500))
      .subscribe((value: string) => {
        this.onDebounce.emit(value);
      });
  }
  ngOnDestroy(): void {
    this.debouncerSubscrition?.unsubscribe();
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
