'use strict'

const newItemInput = document.getElementById('new-item') // input field
const addBtn = document.getElementById('add-item')
const itemCard = document.querySelector('.item-card')

const listItems = []

// edit item at index
const editItem = (item, newItem) => {
  listItems[item] = newItem
}

// remove item from list at index
const removeItem = (item) => {
  listItems.splice(item, 1)
}

// add item to list
const addItem = (newItem) => {
  listItems.push(newItem)
}

// return item to view
const displayItems = () => {
  itemCard.innerHTML = ''
  listItems.forEach((item, index) => {
    itemCard.innerHTML += `
    <div class="item">
      <div class="item-label">${item}</div>
        <div class="btn">
          <button class="edit-btn" id="edit-btn" data-index = "${index}">edit</button>
          <button class="del-btn" id="del-btn" data-index = "${index}">remove</button>
      </div>
    </div>
    `
  })
  newItemInput.value = ''
}

addBtn.addEventListener('click', () => {
  const newItemValue = newItemInput.value
  if (newItemValue) {
    addItem(newItemValue)
    displayItems()
  }
})

// event listener for delete button
itemCard.addEventListener('click', (event) => {
  if (event.target.classList.contains('del-btn')) {
    const itemIndex = parseInt(event.target.getAttribute('data-index'))
    removeItem(itemIndex)
    displayItems()
  }
})

// event listener for edit button
itemCard.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit-btn')) {
    const itemIndex = parseInt(event.target.getAttribute('data-index'))
    const newItemValue = newItemInput.value
    if (newItemValue) {
      editItem(itemIndex, newItemValue)
      displayItems()
    }
  }
})
