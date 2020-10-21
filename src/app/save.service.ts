import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveService {
    savedProviders = []; 

    addToSave(provider) {
      this.savedProviders.push(provider);
      return `${provider} added to your saved list` 

    }
      getProviders(){
        return this.savedProviders; 
      }

      deleteProvider(providers, provider){
        const index = providers.indexOf(provider);
        if (index > -1) { providers.splice(index, 1); 
        return `${provider} + "was deleted from your list`; 
      } else {
        return `${provider} could not be found in your list` 
      }
      }

    }








