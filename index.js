
const activityList = () => document.getElementById('activities-container');
const activityForm = () => document.getElementById('activity-form');

const childForm = () => document.getElementById('form')

const getTitle = () => document.getElementById('title');

const activityFormSubmit = () => document.getElementById('submit-activity');
const formHeader = () => document.getElementById('form-header');


const attachFormEvent = () => {
    activityForm().addEventListener('submit', Activity.createActivity);
    
  }
  
document.addEventListener('DOMContentLoaded', () => {
    Activity.loadAll();
    attachFormEvent();
  })

