// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page

function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage)
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  const howManyPages = Math.ceil(this.collection.length / this.itemsPerPage) 
  if(pageIndex + 1 > howManyPages || pageIndex < 0){
    return -1
  } else if(pageIndex + 1 < howManyPages){
    return this.itemsPerPage
  } else {
    let counter = 0
    for(let i = 0; i < howManyPages - 1; i++){
      counter+= this.itemsPerPage
    } 
    return this.collection.slice(counter).length
  }
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if(itemIndex >= this.collection.length || itemIndex < 0 || this.collection.length === 0) return -1
  if(itemIndex === 0) return 0
  if(itemIndex === this.itemsPerPage) return 1
  if(this.itemsPerPage === 1) return itemIndex
  const howManyPages = Math.ceil(this.collection.length / this.itemsPerPage)
  for(let i = 1; i <= itemIndex; i++){
    if(itemIndex === this.itemsPerPage * i){
      return i
    }
  }
  let counter1 = 0
  let counter2 = 0
  for(let i = 0; i <= howManyPages; i++){
    counter1+= this.itemsPerPage
    counter2++
    if(counter1 >= itemIndex) break
  }
  return counter2 - 1
}