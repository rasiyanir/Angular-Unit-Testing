import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not have any messsages in the beginning', () => {
    //arrange
    // const service = new LoggerService();

    //act
    let count = service.messages.length;

    //assert
    expect(count).toBe(0);
  });

  it('should add the message when the log is called', () => {
    //arrange
    // const service = new LoggerService();
    //act
    service.log('message');
    //assert
    expect(service.messages.length).toBe(1);
  });

  it('should clear all the messages when clear is called', () => {
    //arrange
    // const service = new LoggerService();
    service.log('message');
    //act
    service.clear();
    //assert
    expect(service.messages.length).toBe(0);
  });
});
