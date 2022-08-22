import { Component } from '@angular/core';

@Component({
    selector: 'crx-profile-card-skeleton',
    styleUrls: [
        './profile-card-skeleton.component.scss',
        './profile-card.component.scss'
    ],
    template: `
        <mat-card class="card">
            <mat-card-title-group>
                <mat-card-title>User Profile</mat-card-title>
                <mat-card-subtitle class="skeleton"></mat-card-subtitle>
                <span mat-card-md-image class="skeleton circle"></span>
            </mat-card-title-group>
            <mat-card-content>
                <mat-list>
                    <span class="skeleton"></span>
                    <mat-divider></mat-divider>
                    <span class="skeleton"></span>
                    <mat-divider></mat-divider>
                    <span class="skeleton"></span>
                    <mat-divider></mat-divider>
                </mat-list>
            </mat-card-content>
        </mat-card>
    `
})
export class ProfileCardSkeletonComponent {}
