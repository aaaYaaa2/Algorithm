// 1. Sort a single column 
/**
	<table border="1" id="tblSort">
		<thead>
			<tr>
				<th>Last Name</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Smith</td>
			</tr>
			<tr>
				<td>Johnson</td>
			</tr>
			<tr>
				<td>Henderson</td>
			</tr>
			<tr>
				<td>William</td>
			</tr>
			<tr>
				<td>Gilliam</td>
			</tr>
			<tr>
				<td>Walker</td>
			</tr>
		</tbody>
	</table>
*/

var oTBody = oTable.tBodies[0];
var colDataRows = oTBody.rows;
var sSmith = colDataRows[0].cells[0].firstChild.nodeValue;

// compare function

function compareTRs(oTR1, oTR2){
	var sValue1 = oTR1.cells[0].firstChild.nodeValue;
	var sValue2 = oTR2.cells[0].firstChild.nodeValue;
	return sValue1.localeCompare(sValue2);
}

// sortTable() function 
function sortTable(sTableID){
	var oTable = document.getElementById(sTableID);
	var oTBody = oTable.tBodies[0];
	var colDataRows = oTBody.rows;
	// oTBody.rows is a DOM collection, and we cannot apply sort on it 
	// transform it into an array 
	var aTRs = new Array;
	for(var i=0; i<colDataRows.length; i++){
		aTRs.push(colDataRows[i]);
	}
	// sort the values 
	aTRs.sort(compareTRs);

	// put the table back in correct order
	// use a DocumentFragment and appendChild(): if the element in appendChild is an reference to the node exist 
	// in the document, then appendChild() will remove the old node and append it to the new place 
	var oFragment = document.createDocumentFragment();
	for(var i=0; i<aTRs.length; i++){
		oFragment.appendChild(aTRs[i]);
	}
	// when you use appendChild() and pass it a document fragment, all the chid nodes 
	// of the fragment are appended, not the fragment irself. 
	oTBody.appendChild(oFragment);
}

// 2. Sorting a Multicolumn Table 

/** html

	<table border="1" id="tblSort">
		<thead>
			<tr> 
				<th onclick="sortTable('tblSort', 0)" style="cursor:pointer;">Last Name</th>
				<th onclick="sortTable('tblSort', '1')" style="cursor:pointer;">First Name</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Smith</td>
				<td>John</td>
			</tr>
			<tr>
				<td>Johnson</td>
				<td>Betty</td>
			</tr>
			<tr>
				<td>Henderson</td>
				<td>Nathan</td>
			</tr>
		</tbody>
	</table>
*/

// comparison function generator

function generateCompareTRs(iCol){
	return function compareTRs(oTR1, oTR2){
		var sValue1 = oTR1.cells[iCol].firstChild.nodeValue;
		var sValue2 = oTR2.cells[iCol].firstChild.nodeValue;

		return sValue1.localeCompare(sValue2);
	}
}

// now it is possible to compare several rows
var compareTRs = generateCompareTRs(0);
var compareTRs1 = generateCompareTRs(1);
var compareTRs2 = generateCompareTRs(2);

// since we have multiple columns to sort 
function sortTable(sTableID, iCol){
	var oTable = document.getElementById(sTableID);
	var oTBody = oTable.tBodies[0];
	var colDataRows = oTBody.rows;
	// oTBody.rows is a DOM collection, and we cannot apply sort on it 
	// transform it into an array 
	var aTRs = new Array;
	for(var i=0; i<colDataRows.length; i++){
		aTRs.push(colDataRows[i]);
	}
	// sort the values 
	aTRs.sort(generateCompareTRs(iCol));

	// put the table back in correct order
	// use a DocumentFragment and appendChild(): if the element in appendChild is an reference to the node exist 
	// in the document, then appendChild() will remove the old node and append it to the new place 
	var oFragment = document.createDocumentFragment();
	for(var i=0; i<aTRs.length; i++){
		oFragment.appendChild(aTRs[i]);
	}
	// when you use appendChild() and pass it a document fragment, all the chid nodes 
	// of the fragment are appended, not the fragment irself. 
	oTBody.appendChild(oFragment);
}

// 3. Sort the table in reverse order

/*

The case is often that you click the table twice then its order reversed 
so it is more convenient to use reverse() method here. 
*
*/

// in order to reverse the table, you need to keep track of the status 
// create a Expando property: it is an extra JS propety that is add to an object 
// at runtime. 
function sortTable(sTableID, iCol){
	var oTable = document.getElementById(sTableID);
	var oTBody = oTable.tBodies[0];
	var colDataRows = oTBody.rows;
	// oTBody.rows is a DOM collection, and we cannot apply sort on it 
	// transform it into an array 
	var aTRs = new Array;
	for(var i=0; i<colDataRows.length; i++){
		aTRs.push(colDataRows[i]);
	}
	// sort the values 
	// if the sortCol is eqaul to iCol 
	if(oTable.sortCol == iCol){
		aTRs.reverse();
	}else{
		aTRs.sort(generateCompareTRs(iCol));
	}

	// put the table back in correct order
	// use a DocumentFragment and appendChild(): if the element in appendChild is an reference to the node exist 
	// in the document, then appendChild() will remove the old node and append it to the new place 
	var oFragment = document.createDocumentFragment();
	for(var i=0; i<aTRs.length; i++){
		oFragment.appendChild(aTRs[i]);
	}
	// when you use appendChild() and pass it a document fragment, all the chid nodes 
	// of the fragment are appended, not the fragment irself. 
	oTBody.appendChild(oFragment);
	// to set the sortCol propety to iCol, to mark that it is already been sort 
	oTable.sortCol = iCol;
}

// 4. Sort with different Data Types 

/**
 DOM text nodes always contain string values, when sort datatype other than String, 
 Convet them first. 
 */

 /** html

	<table border="1" id="tblSort">
		<thead>
			<tr> 
				<th onclick="sortTable('tblSort', 0)" style="cursor:pointer;">Last Name</th>
				<th onclick="sortTable('tblSort', '1')" style="cursor:pointer;">First Name</th>
				<th onclick="sortTable('tblSort', 2, 'date')" style="cursor: pointer">Birthday</th>
				<th onclick="sortTable('tblSort', 3, 'int')" style="cursor: pointer">Sibling</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Smith</td>
				<td>John</td>
				<td>7/21/1987</td>
				<td>2</td>
			</tr>
			<tr>
				<td>Johnson</td>
				<td>Betty</td>
				<td>10/15/1977</td>
				<td>4</td>
			</tr>
			<tr>
				<td>Henderson</td>
				<td>Nathan</td>
				<td>2/25/1949</td>
				<td>5</td>
			</tr>
		</tbody>
	</table>
*/

 // create a conversion function 
 // popular 3 conversions: conversion to integer, conversion to float, conversion to date
 // convert from sValue --> sDateType
 // in reality we usually not distinguish between integers and float we just sort them together 
 function convert(sValue, sDateType){
 	switch(sDateType){
 		case "int":
 			return parseInt(sValue);
 		case "float":
 			return parseFloat(sValue);
 		case "date":
 			return new Date(Date.parse(sValue));
 		default:
 			return sValue.toString();
 	}
 }

// we modified gemerateTRs 
// since number and date no support localeCompare method, so we cannnot use them 
// so we need to modify generateCompareTRs
function generateCompareTRs(iCol, sDataType){
	return function compareTRs(oTR1, oTR2){
		var vValue1 = convert(oTR1.cells[iCol].firstChild.nodeValue, sDateType);
		var vValue2 = convert(oTR2.cells[iCol].firstChild.nodeValue, sDateType);
		// do not use == to compare date, 
		// since date is not primitive type, 
		// but < and > works since, it use valueOf() to conver the date in
		// to milliseconds representation 
		if(vValue1 < vValue2){
			return -1;
		}else if(vValue1 > vValue2){
			return 1;
		}else{
			return 0;
		}
	};
}

function sortTable(sTableID, iCol, sDataType){
	var oTable = document.getElementById(sTableID);
	var oTBody = oTable.tBodies[0];
	var colDataRows = oTBody.rows;
	// oTBody.rows is a DOM collection, and we cannot apply sort on it 
	// transform it into an array 
	var aTRs = new Array;
	for(var i=0; i<colDataRows.length; i++){
		aTRs.push(colDataRows[i]);
	}
	// sort the values 
	// if the sortCol is eqaul to iCol 
	aTRs.sort(generateCompareTRs(iCol, sDataType));

	// put the table back in correct order
	// use a DocumentFragment and appendChild(): if the element in appendChild is an reference to the node exist 
	// in the document, then appendChild() will remove the old node and append it to the new place 
	var oFragment = document.createDocumentFragment();
	for(var i=0; i<aTRs.length; i++){
		oFragment.appendChild(aTRs[i]);
	}
	// when you use appendChild() and pass it a document fragment, all the chid nodes 
	// of the fragment are appended, not the fragment irself. 
	oTBody.appendChild(oFragment);
	// to set the sortCol propety to iCol, to mark that it is already been sort 
	oTable.sortCol = iCol;
}

// 5. Advanced Sort 

/*
	If you were to sort a column contains other values, like image, links ... 

	each cell in a table must have a sortable value, string, integer, float, or date 
	so specify alternative value to sort by 

*
*/

// add value attribute to <td>, then you just compare the value of the td 

/**
Summary: use tBodies, rows, cells properties, get the target. rows is a DOM Collection, we need to transform them to 
array, then we need sort them use sort(), we use different comparison function. If the values is not "sortable" we add value 
attribute to it. Then we use DocumentFragment() and appendChild() to append them back. 
*/









