// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 (pointing to the html table)
var tbody = d3.select("tbody");

function buildTable(data){
    // clear the table to make sure the data is not already filtered
    tbody.html("");

    //loop through each data entry
    data.forEach((dataRow) => {
        // add a row to the table
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val)=> {
            // append data into a data table tag
            let cell = row.append("td");
            // added the value to the cell
            cell.text(val);
            });
        });
    }

// keep track of all the filters
var filters = {};

function updateFilters(){
    // select the filter that has been changed
    let filter = d3.select(this);
    
    // save the value and ID
    let filterID = filter.attr("id");    
    let filterValue = filter.property("value");
    
    // look to see if the filter is populated or empty
    if (filterValue){
        filters[filterID]=filterValue;
    }
    else{
        delete filters[filterID];
    }

    filterTable(filters);
    }

function filterTable(obj){
    
    let filteredData = tableData;

    Object.entries(obj).forEach(([key, value])=> {
        filteredData = filteredData.filter(row => row[key] === value);
    })
    
    buildTable(filteredData);
    }

function resetFilters(){
    d3.selectAll('input').property('value',"");
    filters={};
    buildTable(tableData);
}

// // Attach an event to listen for the form button
d3.selectAll("input").on("change", updateFilters);
d3.select('#reset-filter-btn').on('click', resetFilters)

// Build the table when the page loads
buildTable(tableData);