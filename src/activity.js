class Activity {
    static all = []
  
    constructor(data) {
      
      this.id = data.id;
      this.title = data.title;
      this.childenrolls = data.childenrolls;
   
     
      Activity.all.push(this);
      
    }
  
    render() {
      const div = document.createElement('div');
      const h3 = document.createElement('h3');
      const p = document.createElement('p');
      const form = document.createElement('form');
      form.id = 'form'
      div.dataset.id = this.id

      const deleteButton = document.createElement('button');
      // const editButton = document.createElement('button');

      
      const childInput = document.createElement('input');
      const addButton = document.createElement('input');
      
      h3.innerText = this.title;
      h3.style.color = 'blue';
      
      this.childenrolls.forEach(child => {
        p.innerText += `${child.name}, `;
      
      });
      p.style.color = 'green';
  
      deleteButton.innerText = 'delete activity';
      deleteButton.addEventListener('click', e => deleteActivity(this))
  
      // editButton.innerText = 'edit activity';
      // editButton.addEventListener('click', e => editActivity(this))

      childInput.type = 'text';

      addButton.type = 'submit';
      addButton.value = 'add child';
      div.addEventListener('submit', e => Activity.addChild(e))
  
      div.appendChild(h3);
      div.appendChild(p);
      div.appendChild(deleteButton);
      // div.appendChild(editButton);
      div.appendChild(form)
  
      form.appendChild(childInput);
      form.appendChild(addButton);

      
      activityList().appendChild(div);
      activityList().appendChild(p);
    }
  
    static renderAll() {
      activityList().innerHTML = '';
      Activity.all.forEach(activity => activity.render());
    }
  
    static async loadAll() {
      const activities = await ActivityService.get('/activities');
     

      activities.data.forEach(activity => new Activity(activity.attributes))
      
      
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
      
      const activityObj = new Activity(data.data.attributes)
  
      activityObj.render();
      document.getElementById('title').value = ""
    }


    static addChild = async (e) => {
      e.preventDefault()
      
    // debugger
      const childParams = {
        childenroll: {
          name: childForm().children[0].value,
          activity_id: e.target.parentElement.dataset.id
        }
    
      }
    // debugger
      const kidsData = await ActivityService.post('/childenrolls', childParams)
debugger
      const childenrollObj = new Activity(kidsData)
      
      childenrollObj.render()
      // const newChildenroll = await childenrollObj.json();
      document.getElementById('name').value = ""
      // const index = Activity.all.indexOf(Childenroll)
      // Activity.all[index] = new Activity(newChildenroll)
    }


  }
