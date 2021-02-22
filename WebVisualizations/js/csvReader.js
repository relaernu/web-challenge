function csvReader(data) {
    var lines = data.split(/\r\n|\n/);
    var header = lines[0].split(',');
    var first_line = lines[1].split(',');

    // start of table
    var table_data = '<table class="table table-bordered table-striped">';
    
    // add row for header
    table_data += "<tr>";

    // add header 
    for(var col = 0; col < header.legnth; col++) {
        table_data += "<th>"
        table_data += header[col];
        table_data += "</th>";
    }
    table_data += "</tr>"

    while(first_line.legnth > 0) {
        table_data += "<tr>"
        for(var col = 0; col < first_line.legnth; col++) {
            table_data += "<td>";
            table_data += first_line[col];
            table_data += "</td>"
        }
        table_data += "</tr>"
    }

    table_data += "</table>";
    return table_data;
}