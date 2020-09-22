# Count Duplicates Problem

Before you get started make sure to install the needed modules in node by running 

```
node i
```

Then to run the unit test use the command 

```
npm test
```

In the following challenge you are given the following class

```
class CountDuplicates {

    countDups(input){
        return null;
    }
}

module.exports = CountDuplicates;

```

The class has one function called ```countDups```:

Your job is to count the number of duplicate entries in the provided array. For example :

```
Integer[] integers = {1,1,1,2,2,3,4,4};
```

In the above array 

1. 1 appears 3 times, but should be considered 1 set of duplicates.
2. 2 appears 2 times, but should only be considered as 1 set of duplicates.
3. 3 appears once and SHOULD NOT be considered a duplicate.
4. 4 appears 2 times, and should only be considered as 1 set of duplicates.

So the above array as 3 sets of duplicates and should return the value of 3.


