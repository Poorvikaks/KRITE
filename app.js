const products = ["Roadmap", "Feedback", "Performance", "Team","Analysis"];

       
        function plist() {
            const folder = document.getElementById('products');
            const listItems = products.map(folder => {
                return `<li>${folder}</li>`;
            });
            const btn = () => {
                return `<li class="button"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Add New Folder</li>`
            }
            folder.innerHTML = `<ul>${listItems.join('')} ${btn()} </ul>` 
        }
       
        function slist() {
            const folder = document.getElementById('sales');
            const listItems = products.map(folder => {
                return `<li>${folder}</li>`;
            });
            const btn = () => {
                return `<li class="button"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Add New Folder</li>`
            }
            folder.innerHTML = `<ul>${listItems.join('')} ${btn()} </ul>` 
        }
        // const looop=["Roadmap", "Feedback", "Performance"]
        function sales() {
            const folder = document.getElementById('looop');
            const listItems = products.map(folder => {
                return `<li>${folder}</li>`;
            });
            const btn = () => {
                return `<li class="button"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Add New Folder</li>`
            }
            folder.innerHTML = `<ul>${listItems.join('')} ${btn()} </ul>` 
        }

