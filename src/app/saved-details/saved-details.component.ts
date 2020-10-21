import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { unselectedProviders } from '../providers';
import { SaveService } from '../save.service';

export class SavedDetailsComponent implements OnInit {
      constructor(
        private route: ActivatedRoute,
        private saveService: SaveService
      ) { }
      
      addToSave(provider) {
        this.saveService.addToSave(provider);
      }
    
      ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  }
