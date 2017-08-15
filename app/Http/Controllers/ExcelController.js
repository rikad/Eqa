'use strict'

const Excel = use('App/Helper/Excel')
const DB = use('Database')
const Helpers = use('Helpers')

class ExcelController {

  * index(request, response) {
	  	const tes = new Excel(Helpers.storagePath()+'/borang/1494997683720.xlsx',3);

		let a = tes.getAll('data',
		function(data) {
			response.json(data)
		},
		function(err) {
			console.log(err)
		})

		// let a = tes.getSheet(11,'data',
		// function(data) {
		// 	response.json(data)
		// },
		// function(err) {
		// 	console.log(err)
		// })

   }

  * index2(request, response) {
    	const workbook = new Excel.Workbook();

    	function getMergerHeader (worksheet,startIndex){
			let prev = [];
			for (let row = startIndex; row < worksheet.rowCount; row++) {
				if( prev.length == 0) {
					prev[prev.length] = getCell(worksheet,1,row)
				}
				else if(prev[prev.length - 1] == getCell(worksheet,1,row)) {
					prev[prev.length] = getCell(worksheet,1,row)
				}
				else {
					break
				}
			}

			return prev.length
    	}

    	function getHeaderTable(worksheet,startIndex,merger) {
			let headerTitle = [];
			for (let i = 1; i <= worksheet.columnCount; i++) {
				let prev = [];
				for (let row = startIndex; row <= merger + startIndex - 1; row++) {
					let value = getCell(worksheet,i,row)

					if( prev.length == 0) {
						prev[prev.length] = value
					}
					else if (value != prev[prev.length -1]) {
						prev[prev.length] = value
					}
					else if (value == prev[prev.length -1]){
					}
					else {
						break
					}
				}
				headerTitle[headerTitle.length] = prev.toString()
			}

			return headerTitle
    	}

    	function getValueTable(worksheet,startIndex,merger) {
			let valuesTable = [];
			let valueStart = startIndex + merger;
			let valueEnd = worksheet.rowCount;


			for (let row = valueStart; row <= valueEnd; row++) {
				let store = [];
				let deleteRow = true; //will false when still have data
				if (getCell(worksheet,1,row) == -1 ) { continue } //skipp when row is -1

				for (let i = 1; i <= worksheet.columnCount; i++) {
					let value = getCell(worksheet,i,row)
					if (value != null) {
						deleteRow = false
					}
					store[store.length] = value
				}
				if(!deleteRow) {
					valuesTable[valuesTable.length] = store
				}
				else {
					//break when delete row true (mean thats have found end of row, with null sign)
					break
				}
			}

			return valuesTable
    	}

    	function getCell(worksheet,columnIndex,rowIndex) {
			const row = worksheet.getRow(rowIndex);
			const cell = row.getCell(columnIndex)
			let out = cell.value

			//convert rtf to text
			if (typeof(cell.value) == 'object' && cell.value != null && cell.value instanceof Date == false) {
				try {
					out = '';
					for (let i = 0; i < cell.value.richText.length; i++) {
						out += cell.value.richText[i].text;

						//add spaces
						if(i+1 != cell.value.richText.length) {
							out += ' ';
						}
					}
				}
				catch (err) {
					console.log(cell.value+'|'+columnIndex+'|'+rowIndex+'|'+worksheet.name )
				}
			}
			return out
    	}

    	workbook.xlsx.readFile('1494997683720.xlsx')
    	    .then(function() {
    	    	const startIndex = 3; //start header on each worksheet
    	    	let dataSheets = [];
				workbook.eachSheet(function(worksheet, sheetId) {
					let merger = getMergerHeader(worksheet,startIndex);
					let header = getHeaderTable(worksheet,startIndex,merger)
					let data = getValueTable(worksheet,startIndex,merger)

					let value = {
						merger: merger,
						header: header,
						data: data
					}

					dataSheets[worksheet.name] = value;
				});

				console.log(dataSheets)

	    	})
	    	.catch(function(err){
    	    	console.log(err)
	    	});

	    response.json('haha')
	   //yield response.sendView('excel');
    }

  * store(request, response) {
  		const uploadValidation = {
  			allowedExtensions: ['xlsx']
  		}
  		const file = request.file('file',uploadValidation)
  		const fileName = `${new Date().getTime()}.${file.extension()}`

    	//file handling
	    yield file.move(Helpers.storagePath()+'/borang', fileName) 
	    if (!file.moved()) {
	      response.badRequest(file.errors())
	      return
	    }

	    response.json('halo')
    }


}

module.exports = ExcelController
