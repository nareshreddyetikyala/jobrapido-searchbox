import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-searchbox',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent {
  // Property to store the search input text
  searchText: string = '';
  // Array to hold the search results
  results: any[] = [];
  // true when searcj is begin
  isSearching: boolean = false;
  // Injecting SearchService into the component to perform searches
  constructor(private searchService: SearchService) {}
  // Method triggered when the user performs a search
  onSearch() {
    // start the api call when the search value is more than 3
    if (this.searchText.length > 3) {
      // isSearching to true to when search is in progress
      this.isSearching = true;
      // Call the searchService method 'searchComments' to fetch search results based on the input text.
      // This method returns an Observable, so i subscribe to it to handle the asynchronous response
      this.searchService.searchComments(this.searchText).subscribe((data: any[]) => {
        /*  take the first 20 results using slice
            Extract relevant fields (name, email, and body) for each comment.
            Truncate the comment body to 64 characters followed by '...'.
        */
        this.results = data.slice(0, 20).map((comment: { name: string; email: string; body: string }) => ({
          name: comment.name, // Store commenter's name
          email: comment.email, // Store commenter's email
          body: comment.body.substring(0, 64) + '...', // Shorten comment body
        }));
        //isSearching to false when search is complete
        this.isSearching = false;
      });
    }
  }  
}
