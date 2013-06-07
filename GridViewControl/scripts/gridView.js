var controls = (function () {

    function GridView(selector) {

        var header = [];
        var rows = [];
        var gridViewHolder = document.querySelector(selector);     
        this.display = "";
        

        gridViewHolder.addEventListener("click",
        function (ev) {
           if (!ev) {
               ev = window.event;
           }
           ev.stopPropagation();
           ev.preventDefault();

           var clickedItem = ev.target;

           if (!(clickedItem instanceof HTMLTableCellElement)) {
               return;
           }

           var subTable = clickedItem.nextElementSibling;
           
           while (!(subTable instanceof HTMLTableElement)) {
               if (subTable == null) {
                   return;
               }
                   subTable = subTable.nextElementSibling;           
           }
            
           if (subTable == null) {
               return;
           }

           console.log(subTable);
           
           if (subTable.style.display === "none") {
               subTable.style.display = "";
           } else {
               subTable.style.display = "none";
           }
        }, false);

        this.addHeader = function () {
            var args = arguments;
            var newHeader = new Header(args);
            header.push(newHeader);
            return newHeader;
        };

        this.addRow = function () {
            var args = arguments;
            var newRow = new Row(args);
            rows.push(newRow);
            return newRow;
        };

        this.render = function () {
            var gridView = document.createElement("table");
            gridView.style.display = this.display;

            for (var i = 0, len = header.length ; i < len; i += 1) {
                var tableHeader = header[i].render();
                gridView.appendChild(tableHeader);
            }

            for (var i = 0, len = rows.length ; i < len; i += 1) {
                var tableRow = rows[i].render();
                gridView.appendChild(tableRow);
            }
            gridViewHolder.appendChild(gridView);
            return this;
        };
    }

    function Header(args) {

        this.addHeader = function () {
            var args = arguments;
            var newHeader = new Header(args);
            header = newHeader;
            return newHeader;
        };

        this.render = function () {
            var headerRow = document.createElement("tr");

            for (var i = 0; i < args.length; i += 1) {
                headerRow.innerHTML += "<th>" + args[i].toString().htmlEscape() + "</th>"
            }

            return headerRow
        };
    }

    function Row(args) {
        var firstCell = (args[0].split(" "));
        this.id = firstCell[0];
        this.class = "normal";

        this.addRow = function () {
            var args = arguments;
            var newRow = new Row(args);
            return newRow;
        };

        this.render = function () {
            var tableRow = document.createElement("tr");
            tableRow.id = this.id;
            tableRow.className = this.class;
                        
            for (var i = 0; i < args.length; i += 1) {
                tableRow.innerHTML += "<td>" + args[i].toString().htmlEscape() + "</td>"
            }

            return tableRow;
        };

        this.getNestedGridView = function () {
            var rowId = "#" + this.id;
            this.class = "nested";

            var nestedGridView = new GridView(rowId);
            nestedGridView.display = "none";

            return nestedGridView;
        };
    }

    return {
        getGridView: function (selector) {
            return new GridView(selector);
        }
    }
})();