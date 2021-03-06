const Task = require('../models/Task');

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then((id) => {
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      Task.find(id).then((task) => res.json(task))
      console.log('Task created with id: ', id);
    }else{
      res.redirect('/');
    }
  });
}

exports.updateStatus = (req, res) => {
  Task.updateStatus(req.body.id).then((id) => {
    console.log('Task status updated to: done');
    res.redirect('/');
  });
}

exports.deleteTask = (req, res) => {
  Task.deleteTask(req.body.id).then((id) =>{
    console.log('Task deleted, ok');
    res.redirect('/')
  })
}

exports.retrieveAll = (req, res) => {
  Task.all().then((data) => {
    console.log(data);
    res.send(data)
  })
}
