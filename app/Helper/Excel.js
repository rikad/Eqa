'use strict'

const Exceljs = use('exceljs')

class Excel {
    constructor(file,startIndex) {
        this.workbook = new Exceljs.Workbook();
        this.file = file;
        this.startIndex = startIndex; //start header on each worksheet
        this.dataSheets = [];
        this.sheetId = null;
        this.type = null;
    }

    getMergerHeader (worksheet,startIndex){
      let prev = [];
        for (let row = startIndex; row < worksheet.rowCount; row++) {
            let item = this.getCell(worksheet,1,row)
            if( prev.length == 0) {
                prev.push(item)
            }
            else if(prev[prev.length - 1] == item) {
              prev.push(item)
            }
            else {
              break
            }
        }

      return prev.length
    }

    getHeaderTable(worksheet,startIndex,merger) {
      let headerTitle = [];
      for (let i = 1; i <= worksheet.columnCount; i++) {
        let prev = [];
        for (let row = startIndex; row <= merger + startIndex - 1; row++) {
          let value = this.getCell(worksheet,i,row)
          let length = prev.length;

          if( prev.length == 0) {
            prev.push(value)
          }
          else if (value != prev[length -1]) {
            prev[prev.length] = value
          }
          else if (value == prev[length -1]){
          }
          else {
            break
          }
        }
        headerTitle.push(prev.toString())
      }

      return headerTitle
    }

    getValueTable(worksheet,startIndex,merger) {
      let valuesTable = [];
      let valueStart = startIndex + merger;
      let valueEnd = worksheet.rowCount;
      let column = worksheet.columnCount;


      for (let row = valueStart; row <= valueEnd; row++) {
        let store = [];
        let deleteRow = true; //will false when still have data
        if (this.getCell(worksheet,1,row) == -1 ) { continue } //skipp when row is -1

        for (let i = 1; i <= column; i++) {
          let value = this.getCell(worksheet,i,row)
          if (value != null) {
            deleteRow = false
          }
          store.push(value)
        }
        if(!deleteRow) {
          valuesTable.push(store)
        }
        else {
          //break when delete row true (mean thats have found end of row, with null sign)
          break
        }
      }

      return valuesTable
    }

    getCell(worksheet,columnIndex,rowIndex) {
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


    readFile(callbackOk,callbackErr) {
        let ini = this;

        ini.workbook.xlsx.readFile(ini.file)
            .then(function() {
                let output;
                if(ini.sheetId == null) {
                    let dataSheets = new Object();
                    ini.workbook.eachSheet(function(worksheet, sheetId) {
                        let value = new Object()
                        let name = worksheet.name;
                        let merger = ini.getMergerHeader(worksheet,ini.startIndex);

                        if (ini.type == 'merger') {
                            value['merger'] = merger;
                        }
                        if (ini.type == 'header') {
                            value['title'] =  ini.getHeaderTable(worksheet,ini.startIndex,merger)
                        }
                        if (ini.type == 'data') {
                            value['data'] = ini.getValueTable(worksheet,ini.startIndex,merger)
                        }

                        dataSheets[name] = value;
                    })
                    output = dataSheets;
                }
                else {
                    let worksheet = ini.workbook.getWorksheet(ini.sheetId);
                    let merger = ini.getMergerHeader(worksheet,ini.startIndex);

                    if (ini.type == 'merger') {
                        output = merger;
                    }
                    if (ini.type == 'header') {
                        output =  ini.getHeaderTable(worksheet,ini.startIndex,merger)
                    }
                    if (ini.type == 'data') {
                        output = ini.getValueTable(worksheet,ini.startIndex,merger)
                    }

                }

                callbackOk(output)
            })
            .catch(function(err){
                callbackErr(err)
            })
    }

    getAll(type,callbackOk,callbackErr) {
        this.sheetId = null;
        this.type = type;

        this.readFile(callbackOk,callbackErr)
    }

    getSheet(sheetId,type,callbackOk,callbackErr) {
        this.sheetId = sheetId;
        this.type = type;

        this.readFile(callbackOk,callbackErr)
    }

}

module.exports = Excel

