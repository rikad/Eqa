'use strict'

const MainTable = use('App/Model/People')
const DB = use('Database')
const Validator = use('Validator')

const ViewNjk = 'people';
const Table = 'po_people';

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
        var data = yield DB.table(Table)
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
        var totalFiltered = yield DB.table(Table)
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
        var data = yield DB.table(Table)
                            .orderBy(activeColumnOrder,orderBy)
                            .offset(parseInt(start))
                            .limit(parseInt(limit))
      }
    }
    else {
      //default filter
      var data = yield DB.table(Table).select('*').offset(parseInt(start)).limit(parseInt(limit))
    }

    //check total data
    const total = yield MainTable.query().count('id as total').first()
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
    const data = request.except('_csrf')
    const validation = yield Validator.validate(data, MainTable.rules)
    var status = 'success';
    var message = 'success';

    if (validation.fails()) {
      status = 'validation';
      message = JSON.stringify(validation.messages());
    }
    else {
      try {
        var person = yield MainTable.create(data)
      }
      catch (err) {
        message = 'Update data of '+person.name+' Failed : Please Contact Your administrator';
        status = 'danger';
        console.log(err);
      }
    }

    const output = JSON.stringify({ status: status, message: message})
    response.json(output)
  }

  * show(request, response) {

    const data = yield MainTable.find(request.param('id'))
    var status='success';
    var message='success';

    if (data == null){
      status = 'error';
      message = 'data not found';
    }

    const output = {data: data, status: status, message: message}
    response.json(output)
  }

  * edit(request, response) {
  }

  * update(request, response) {
    const id = request.param('id')
    const data = request.except('_csrf')
    const validation = yield Validator.validate(data, MainTable.rules)

    var status = 'success';
    var message = 'success';

    if (validation.fails()) {
      status = 'validation';
      message = JSON.stringify(validation.messages());
    }
    else {
      try {
        var person = yield MainTable.findBy('id', id)
        person.fill(data)
        yield person.save()
        message = 'Update data of '+person.name+' Success';
      }
      catch (err) {
        message = 'Update data of '+person.name+' Failed : Please Contact Your administrator';
        status = 'danger';
        console.log(err);
      }
    }

    const output = JSON.stringify({ status: status, message: message})
    response.json(output)
  }

  * destroy(request, response) {
    var data = decodeURI(request.param('id'))
    var ids = JSON.parse(data)
    var status='success';
    var message='Success Deleted';

    for(var i=0; i<ids.length; i++) {
      try {
        var data = yield MainTable.findBy('id', ids[i])
        yield data.delete()
      }
      catch (err) {
        status = 'danger';
        message = 'Delete data of '+data.name+' Failed : Please Contact Your administrator';
        console.log(err);
      }
    }


    const output = { status: status, message: message}
    response.json(output)
  }

  //tambahan untuk view
  * view(request, response) {
    yield response.sendView(ViewNjk);
  }

}

module.exports = PeopleController
