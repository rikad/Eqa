'use strict'

const People = use('App/Model/People')
const DB = use('Database')

class PeopleController {

  * index(request, response) {

    //get GET parameter
    const getParams = request.get()

    //set default parameter
    const draw = getParams.draw == undefined ? 1 : getParams.draw
    const limit = getParams.length == undefined ? 10 : getParams.length
    const start = getParams.start == undefined ? 1 : getParams.start
    const search = getParams.search == undefined ? false : getParams.search
    const columns = getParams.columns == undefined ? false : getParams.columns
    const order = getParams.order == undefined ? false : getParams.order

    //check for order, set options column and search
    if (columns != false && order != false) {
      const activeColumnOrder = columns[parseInt(order[0].column)].data
      const orderBy = order[0].dir

      //cek for searching
      if (search != false) {
        // if user search
        var data = yield DB.table('po_people')
                          .orderBy(activeColumnOrder,orderBy)
                          .offset(parseInt(start))
                          .limit(parseInt(limit))
                          .where(function() {
                            for (let item of columns) {
                              if (item.searchable == 'true' || item.searchable == true) {
                                this.orWhere(item.data,'like','%'+search.value+'%')
                              }
                            }
                          })

        //cek total filtered data with no limit for count all data
        var totalFiltered = yield DB.table('po_people')
                          .select(DB.raw("count('*') as total"))
                          .where(function() {
                            for (let item of columns) {
                              if (item.searchable == 'true' || item.searchable == true) {
                                this.orWhere(item.data,'like','%'+search.value+'%')
                              }
                            }
                          }).first()
        //count to recordfiltered
        var recordsFiltered = totalFiltered.total

      }
      else {
        //if not search
        var data = yield DB.table('po_people')
                            .orderBy(activeColumnOrder,orderBy)
                            .offset(parseInt(start))
                            .limit(parseInt(limit))
      }
    }
    else {
      //default filter
      var data = yield DB.table('po_people').select('*').orderBy('name','asc').offset(parseInt(start)).limit(parseInt(limit))
    }

    //check total data
    const total = yield People.query().count('id as total').first()
    var recordsTotal = total.total

    //check if not filtered recordsfiltered is same as recordsTotal
    var recordsFiltered = recordsFiltered == undefined ? total.total : recordsFiltered

    //print out all response
    var output = {draw:draw,recordsTotal:recordsTotal,recordsFiltered:recordsFiltered,data:data}
    response.json(output)
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
  }

  * show(request, response) {

    const data = yield People.find(request.param('id'))
    var status='success'
    var message='success' 

    if (data == null){
      status = 'error';
      message = 'data not found';
    }

    const output = {data: data, status: status, message: message}
    response.json(output)
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

  //tambahan untuk view
  * view(request, response) {
    yield response.sendView('people');
  }

}

module.exports = PeopleController