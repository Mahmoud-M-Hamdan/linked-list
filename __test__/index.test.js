'use strict';

const LinkedList = require('../lib/LinkedList');


describe('Linked list', () => {

  it('creation of linkedList works', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it('insert to linkedList works', () => {

    let list = new LinkedList();

    list.insert('One');

    // check if the first node value is correct
    expect(list.head.value).toEqual('One');

    list.insert('Two');

    // just make sure the head remains the same as the first value
    expect(list.head.value).toEqual('One');

    // all cases



  });

  it(' Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();

    list.insert('one');
    list.insert('two');
    let isExist = list.includes('three');

    expect(isExist).toBe(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    list.insert('one');
    list.insert('two');


    expect(list.head.next).not.toBeNull();
  });

  it(' Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();

    list.insert('one');
    list.insert('two');
    let isExist = list.includes('one');
    expect(isExist).toBe(true);
  });

  it('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert('one');


    expect(list.head.value).toBe('one');
    expect(list.head.next).toBeNull();
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    list.insert('one');
    list.insert('two');
    list.toString();
    expect(list.toString()).toBe('{ one } -> { two } -> NULL');
  });

});
