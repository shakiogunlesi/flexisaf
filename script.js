
        // Initial Array
        let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
        
        // Function to display array in the list
        function displayArray() {
            const arrayList = document.getElementById("arrayList");
            const arrayDisplay = document.getElementById("arrayDisplay");

            arrayList.innerHTML = ""; // Clear the list
            arrayDisplay.textContent = fruits.join(", ");
            fruits.forEach(fruit => {
                const colDiv = document.createElement("div");
                colDiv.className = "col-3";  // Responsive column

                const li = document.createElement("li");
                li.textContent = fruit;
                colDiv.appendChild(li);
                arrayList.appendChild(colDiv);
            });

            console.log("Array updated:", fruits);
        }

        // Add an element to the array
        function addElement() {
            fruits.push("Pineapple");
            console.log("Added element: Pineapple");
            displayArray();
        }

        // Remove the last element from the array
        function removeElement() {
            const removed = fruits.pop();
            console.log("Removed element:", removed);
            displayArray();
        }

        // Filter array to show only elements containing the letter 'g'
        function filterArray() {
            const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().includes('g'));
            console.log("Filtered array (contains 'g'):", filteredFruits);
            fruits = filteredFruits;
            displayArray();
        }

        // Map over array to convert each element to uppercase
        function mapArray() {
            const uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
            console.log("Mapped array (to uppercase):", uppercasedFruits);
            fruits = uppercasedFruits;
            displayArray();
        }

        // Use splice to remove 2 elements starting from index 1, and add 'Strawberry'
        function spliceArray() {
            fruits.splice(1, 2, "Strawberry");
            console.log("Array after splice:", fruits);
            displayArray();
        }

        // Function to change background, text, and button color
        function changeBackgroundColor() {
            const bgColor = document.getElementById('bg-color').value;
            document.body.style.backgroundColor = bgColor;

            // Calculate contrasting color (either white or black based on luminance)
            const textColor = getContrastYIQ(bgColor);
            
            // Change text and button colors
            document.body.style.color = textColor;

            // Get all buttons and change their text and background color
            const buttons = document.querySelectorAll('button');
            buttons.forEach(button => {
                button.style.backgroundColor = textColor === 'black' ? 'white' : 'black'; // Invert the color for button background
                button.style.color = textColor; // Text color of the buttons
            });

            console.log("Background color changed to:", bgColor, "Text color:", textColor);
        }

        // Function to calculate whether black or white is better based on YIQ color space
        function getContrastYIQ(hexcolor){
            hexcolor = hexcolor.replace("#", "");
            const r = parseInt(hexcolor.substr(0,2),16);
            const g = parseInt(hexcolor.substr(2,2),16);
            const b = parseInt(hexcolor.substr(4,2),16);
            const yiq = ((r*299)+(g*587)+(b*114))/1000;
            return (yiq >= 128) ? 'black' : '#ccc';
        }

        // Initial display of the array
        displayArray();
    