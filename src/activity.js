class Activity {
    static all = []
  
    constructor({id, title, name}) {
      this.id = id;
      this.title = title;
      // Childenroll.name = name;
      Activity.all.push(this);
      // Childenroll.all.push(this);
    }
  
    render() {
      const div = document.createElement('div');
      const h3 = document.createElement('h3');
      const p = document.createElement('p');
      const deleteButton = document.createElement('button');
      const editButton = document.createElement('button');

      const form = document.createElement('form');
      const childInput = document.createElement('input');
      const addButton = document.createElement('input');
  
      h3.innerText = this.title;
      h3.style.color = 'blue';

      p.innerText = Childenroll.name;
      p.style.color = 'green';
  
      deleteButton.innerText = 'delete activity';
      deleteButton.addEventListener('click', e => deleteActivity(this))
  
      editButton.innerText = 'edit activity';
      editButton.addEventListener('click', e => editActivity(this))

      childInput.type = 'text';

      addButton.type = 'submit';
      addButton.value = 'add child';
      form.addEventListener('submit', e => addChild(this, e))
  
      div.appendChild(h3);
      div.appendChild(p);
      div.appendChild(deleteButton);
      div.appendChild(editButton);
  
      form.appendChild(childInput);
      form.appendChild(addButton);

      activityList().appendChild(div);

    }
  
    static renderAll() {
      activityList().innerHTML = '';
      Activity.all.forEach(activity => activity.render());
    }
  
    static async loadAll() {
      const activities = await ActivityService.get('/activities');
        
      activities.forEach(activity => new Activity(activity))
  
      Activity.renderAll();
    }
  
    static createActivity = async (e) =>{
        e.preventDefault();
  
      const strongParams = {
        activity: {
          title: getTitle().value
        }
      }
      
      const data = await ActivityService.post('/activities', strongParams);
      
      const activityObj = new Activity(data)
  
      activityObj.render();
      document.getElementById('title').value = ""
    }
  }

// class Activity{

//   static all = []
//     static activitiesContainer = document.getElementById("activities-container")
//     static activityForm = document.getElementById('new-activity-form')

//     constructor({id, title}){
//         Activity.all.push(this)
//         this.id = id
//         this.title = title
        

//         this.element = document.createElement('li')
//         this.element.dataset.id = this.id
//         this.element.id = `activity-${this.id}`
//         this.element.addEventListener('click', this.handleClick)

//         Activity.all.push(this)
//     }

//     activityHTML(){
//         this.element.innerHTML += `
//             <div> 
//             <h3> ${this.title}</h3>
//             <p> ${Childenroll.id}</p>
//             </div>
//             <button id='delete-bttn'>Delete</button>
//             <br>
//             <br>

//         `
//         return this.element
//     }


//     Dom(){
//         Activity.activitiesContainer.appendChild(this.activityHTML())
        
//     }

//     static renderForm(){
//         Activity.activityForm.innerHTML += `
//         <form id="new-activity-form">
//         <input type="text" id="title"> 
//         <input type="submit" value= "Create Activity"id="create"> 
//         <form>
//         `
//     }
//     handleClick = () => {

//         if (event.target.innerText === 'Delete'){
//             activityService.deleteActivity(this.id)
//         }
//     }
// }
