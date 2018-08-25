// Write your solution in this file!

const driver = {};


function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(drver, key, value){
  driver[key] = value
  return driver
   // - this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.
 }

function deleteFromDriverByKey(driver, key){
  var newThing = Object.assign({}, driver);

  delete newThing[key];

  return newThing

   // - this function should take in a driver Object and a key. It should delete the key/value pair for the key that was passed in from the driver Object. This should all not actually mutate the driver passed in.
 }

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver
//  - this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in.

// HINT: You might find deleteFromDriverByKey() to be a bit hard to write non-destructively. Think about how we learned to use Object.assign().
}
