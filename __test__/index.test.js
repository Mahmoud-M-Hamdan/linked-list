'use strict';

const LinkedList = require('../lib/LinkedList');


describe('Linked list', () => {

  it('creation of linkedList works', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it('append to linkedList works', () => {

    let list = new LinkedList();

    list.append('One');

    // check if the first node value is correct
    expect(list.head.value).toEqual('One');

    list.append('Two');

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


    expect(list.returnedLinkedlList).toBe('{one} -> {two} -> NULL');
  });

  it(' Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();

    list.insert('one');
    list.insert('two');
    let isExist = list.includes('two');
    expect(isExist).toBe(true);
  });

  it('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert('one');
    list.insert('two');


    expect(list.returnedLinkedlList).toBe('{one} -> {two} -> Null');
  });

});
