import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDisplayNamePipe } from './user-display-name.pipe';

@NgModule({
    declarations: [UserDisplayNamePipe],
    exports: [UserDisplayNamePipe],
    imports: [CommonModule],
    providers: [UserDisplayNamePipe]
})
export class UserDisplayNameModule {}
