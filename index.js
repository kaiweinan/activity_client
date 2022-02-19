

let editedActivity = null;



// Node Getters
const activityList = () => document.getElementById('activities-container');
const activityForm = () => document.getElementById('activity-form');

const childForm = () => document.getElementById('form')

const getTitle = () => document.getElementById('title');
const getChildenroll = () => document.getElementById('childenroll');
const activityFormSubmit = () => document.getElementById('submit-activity');
const formHeader = () => document.getElementById('form-header');


const attachFormEvent = () => {
    activityForm().addEventListener('submit', Activity.createActivity);
    childForm().addEventListener('submit', Activity.addChild);
  }
  
document.addEventListener('DOMContentLoaded', () => {
    Activity.loadAll();
    attachFormEvent();
  })

