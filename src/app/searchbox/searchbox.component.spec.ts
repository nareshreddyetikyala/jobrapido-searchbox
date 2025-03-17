import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchboxComponent } from './searchbox.component';
import { SearchService } from '../search.service';
describe('SearchboxComponent', () => {
  let component: SearchboxComponent;
  let fixture: ComponentFixture<SearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SearchboxComponent]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(SearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
