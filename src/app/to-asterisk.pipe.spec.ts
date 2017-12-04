import { TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable } from "@angular/core";
import { ToAsteriskPipe } from "./to-asterisk.pipe";

describe('JsonToArrayPipe', () => {
  let pipe: ToAsteriskPipe;
  let items = [
    ['value', 'value2']
  ];
  let term = 'val';
  beforeEach(() => {
    pipe = new ToAsteriskPipe();
  });
  it('should filter search results (WIP)', () => {
    // expect(pipe.transform(items, term)).toBe(term);
  });
});
