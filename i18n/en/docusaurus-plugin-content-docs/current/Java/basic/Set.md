---
sidebar_position: 1
---

# Set

Set is an interface.
Classes that implements this interface:
1. HashSet
2. TreeSet

```js
Set<Integer> hashSet = new HashSet<>();
hashSet.add(7);
hashSet.add(3);
hashSet.add(3);
hashSet.add(5);

```
In above example there are: 5,3,7

# Features
-No order
-Elements are unique
-Values are hashed so when two elements have the same hash only one will be appended to the Set.


```js
Set<Integer> treeSet = new TreeSet<>();
treeSet.add(7);
treeSet.add(3);
treeSet.add(3);
treeSet.add(5);

```
In above example there are numbers in sorted order: 3,5,7

# Features
-ascending sort
-elemets are unique