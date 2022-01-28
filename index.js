/** globals */
// const base_url = 'http://127.0.0.1:3000'
// const activityService = new ActivityService(base_url);
// const childenrollService = new ChildenrollService(base_url)

let editedActivity = null;

// Activity.activitiesContainer.addEventListener('submit', activitySubmit)
// Childenroll.childenrollsContainer.addEventListener('submit', handleSubmit)

// activityService.getActivities()
// Activity.renderForm()

// childenrollService.getChildenrolls()
// Childenroll.renderForm()

// function activitySubmit(){
//   debugger
//     event.preventDefault()
//     activityService.createActivity()
//     event.target.reset()
  
// }

// function handleSubmit(){
//   debugger
//     event.preventDefault()
//     childenrollService.createChildenroll()
//     event.target.reset()
  
// }

// Node Getters
const activityList = () => document.getElementById('activities-container');
const activityForm = () => document.getElementById('activity-form');
const getTitle = () => document.getElementById('title');
const getChildenroll = () => document.getElementById('childenroll');
const activityFormSubmit = () => document.getElementById('submit-activity');
const formHeader = () => document.getElementById('form-header');


const attachFormEvent = () => {
    activityForm().addEventListener('submit', Activity.createActivity);
    
  }
  
document.addEventListener('DOMContentLoaded', () => {
    Activity.loadAll();
    attachFormEvent();
  })

