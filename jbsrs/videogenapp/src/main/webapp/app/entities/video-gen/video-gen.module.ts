import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VideogenappSharedModule } from '../../shared';
import {
    VideoGenService,
    VideoGenPopupService,
    VideoGenComponent,
    VideoGenDetailComponent,
    VideoGenDialogComponent,
    VideoGenPopupComponent,
    VideoGenDeletePopupComponent,
    VideoGenDeleteDialogComponent,
    videoGenRoute,
    videoGenPopupRoute,
} from './';

const ENTITY_STATES = [
    ...videoGenRoute,
    ...videoGenPopupRoute,
];

@NgModule({
    imports: [
        VideogenappSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        VideoGenComponent,
        VideoGenDetailComponent,
        VideoGenDialogComponent,
        VideoGenDeleteDialogComponent,
        VideoGenPopupComponent,
        VideoGenDeletePopupComponent,
    ],
    entryComponents: [
        VideoGenComponent,
        VideoGenDialogComponent,
        VideoGenPopupComponent,
        VideoGenDeleteDialogComponent,
        VideoGenDeletePopupComponent,
    ],
    providers: [
        VideoGenService,
        VideoGenPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VideogenappVideoGenModule {}