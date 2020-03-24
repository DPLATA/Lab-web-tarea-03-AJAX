const knex = require('../database/connection');

exports.PENDING = 'pending';
exports.DONE = 'done'

exports.all = () => {
  return knex
    .select('*')
    .from('tasks');
}

exports.create = (task) => {
  return knex('tasks')
    .insert({ description: task.description });
}

exports.updateStatus = (id) => {
  return knex('tasks')
  .where({ id: id })
    .update({ status: exports.DONE });
}

exports.find = (id) => {
  return knex('tasks')
  .select('*')
  .where({id: id})
  .first()
}

exports.deleteTask = (id) => {
  return knex('tasks')
  .where({id: id})
  .del()
}
