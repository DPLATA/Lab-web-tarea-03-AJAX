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
