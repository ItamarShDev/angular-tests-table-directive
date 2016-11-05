# Angular Test table directive

###Have you ever needed to create a simple HTML table, to show your tests status?

We all know the next problem:
We have tests running, and we want to show them in a table.
> ***the problems***:
> * not all tests ran in the same dates
> * the number of the dates is ever changing


This directive is plain simple,
just call it with the data, and get the right table HTML
> **this directive hasn't any css properties, its pure ``<table>, <th>, <td>, <tr>`` so you can customize it as you wish.**

### Data format
The directive will parse your data as long as its in the following format:
{
    rowName: [
    {name:"", result:""},
    {name:"", result:""},
    {name:"", result:""},
    {name:"", result:""},
    ...
    ],
    ...
}

- ``rowName`` is the first col of each row
- ` {name:"", result:""}` is a col where
 - ``name`` is the test's name
 - ``result`` is the test's result


## Usage:
* Download ``tests-table.js``
* Add ``<script>`` to youre HTML, referrencing ``tests-table.js``
* In you Angular module, add ``TestsTable`` dependency.
* In you HTML, just call 
```html
<full-table main-col-name="name" table-data="tableData"></full-table>
```
where ``main-col-name`` is the first column's name
and ``table-data`` is the data to fill the table with.
