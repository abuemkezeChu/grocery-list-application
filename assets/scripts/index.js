'use strict'

const newItemInput = document.getElementById('new-item') // input field
const addBtn = document.getElementById('add-item')
const editBtn = document.getElementById('edit-item')
const delBtn = document.getElementById('delete-item')
const itemCard = document.querySelector('.item-card')

const listItems = []

// add item to list
const addItem = (newItem) => {
  listItems.push(newItem)
}

// return item to view
const displayItems = () => {
  // addItem(newItem.value)
  // itemCard.innerHTML +=
  //     ` <div class="item-label">
  //         <output>${listItems}</output>
  //       </div>
  //       <div class="btn">
  //         <button id="edit-item">Edit</button>
  //         <button id="delete-item">Remove</button>
  //       </div>
  //     `
  itemCard.innerHTML = ''
  listItems.forEach((item) => {
    const itemDiv = document.createElement('div')
    itemDiv.classList.add('item')

    const itemLabel = document.createElement('div') // display item name
    itemLabel.classList.add('item-label')
    itemLabel.textContent = item

    const btnDiv = document.createElement('div')
    btnDiv.classList.add('btn')

    const editBtn = document.createElement('button')
    editBtn.textContent = 'edit'

    const delBtn = document.createElement('button')
    delBtn.textContent = 'remove'

    btnDiv.appendChild(editBtn)
    btnDiv.appendChild(delBtn)

    itemDiv.appendChild(itemLabel)
    itemDiv.appendChild(btnDiv)
    itemCard.appendChild(itemDiv)

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
