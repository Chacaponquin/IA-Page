import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [],
  exports: [NzInputModule, NzSelectModule],
  imports: [CommonModule, NzInputModule, NzSelectModule],
})
export class AntdModule {}
