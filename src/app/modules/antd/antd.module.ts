import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [],
  exports: [NzInputModule, NzSelectModule, NzInputNumberModule, NzButtonModule],
  imports: [CommonModule, NzInputModule, NzSelectModule],
})
export class AntdModule {}
