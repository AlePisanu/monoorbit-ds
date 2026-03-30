import { Component, ChangeDetectionStrategy, input, output, model, QueryList, ViewChildren, ElementRef } from '@angular/core';

export interface DsTab {
  id: string;
  label: string;
}

@Component({
  selector: 'ds-tabs',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  tabs = input<DsTab[]>([]);
  activeTabId = model('');

  tabSelected = output<string>();

  @ViewChildren('tabBtn') tabButtons!: QueryList<ElementRef<HTMLButtonElement>>;

  selectTab(tabId: string): void {
    this.activeTabId.set(tabId);
    this.tabSelected.emit(tabId);
  }

  onKeyDown(event: KeyboardEvent, index: number): void {
    const tabList = this.tabs();
    let newIndex: number | null = null;

    switch (event.key) {
      case 'ArrowRight':
        newIndex = (index + 1) % tabList.length;
        break;
      case 'ArrowLeft':
        newIndex = (index - 1 + tabList.length) % tabList.length;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = tabList.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    this.selectTab(tabList[newIndex].id);
    this.tabButtons.get(newIndex)?.nativeElement.focus();
  }
}
