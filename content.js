document.addEventListener('DOMContentLoaded', function() {
    // Sample data for clothing and accessories (could be fetched from an API or database)
    const clothingItems = [
        { id: 1, name: 'T-Shirt', image: 'images/tshirt.jpg', price: '$19.99' },
        { id: 2, name: 'Jeans', image: 'images/jeans.jpg', price: '$49.99' },
        { id: 3, name: 'Blouse', image: 'images/blouse.jpg', price: '$29.99' },
        { id: 4, name: 'Shoes', image: 'images/shoes.jpg', price: '$59.99' },
        { id: 5, name: 'Jacket', image: 'images/jacket.jpg', price: '$89.99' },
        { id: 6, name: 'Skirt', image: 'images/skirt.jpg', price: '$39.99' },
        { id: 7, name: 'Sweater', image: 'images/sweater.jpg', price: '$34.99' },
        { id: 8, name: 'Hat', image: 'images/hat.jpg', price: '$19.99' },
        { id: 9, name: 'Bag', image: 'images/bag.jpg', price: '$29.99' },
        { id: 10, name: 'Accessories', image: 'images/accessories.jpg', price: '$15.99' }
    ];
  
    const accessoriesItems = [
        { id: 1, name: 'Sunglasses', image: 'images/sunglasses.jpg', price: '$14.99' },
        { id: 2, name: 'Watch', image: 'images/watch.jpg', price: '$99.99' },
        { id: 3, name: 'Belt', image: 'images/belt.jpg', price: '$19.99' },
        { id: 4, name: 'Scarf', image: 'images/scarf.jpg', price: '$24.99' },
        { id: 5, name: 'Gloves', image: 'images/gloves.jpg', price: '$18.99' }
    ];
  
    // Function to render clothing items
    function renderClothingItems(items) {
        const container = document.getElementById('containerClothing');
        items.forEach(item => {
            const box = document.createElement('div');
            box.id = 'box';
            box.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div id="details">
                    <h3>${item.name}</h3>
                    <h4>${item.price}</h4>
                </div>
            `;
            container.appendChild(box);
        });
    }
  
    // Function to render accessories items
    function renderAccessoriesItems(items) {
        const container = document.getElementById('containerAccessories');
        items.forEach(item => {
            const box = document.createElement('div');
            box.id = 'box';
            box.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div id="details">
                    <h3>${item.name}</h3>
                    <h4>${item.price}</h4>
                </div>
            `;
            container.appendChild(box);
        });
    }
  
    // Render the items when the page is loaded
    renderClothingItems(clothingItems);
    renderAccessoriesItems(accessoriesItems);
  });
  