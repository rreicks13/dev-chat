/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChatNavComponent } from './chat-nav.component';

describe('ChatNavComponent', () => {
  let component: ChatNavComponent;
  let fixture: ComponentFixture<ChatNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
