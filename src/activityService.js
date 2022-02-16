class ActivityService {
    static baseUrl = 'http://localhost:3000';
    static headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  
    static async get(url) {
      const response = await fetch(this.baseUrl + url);
      const data = await response.json();
      return data;
    }
  
    static async post(url, data) {
      const response = await fetch(this.baseUrl + url, {
        method: "POST",
        headers: ActivityService.headers,
        body: JSON.stringify(data)
      })
      const obj = response.json();
      return obj;
    }
  }

  /** Event Handlers **/
// const addChild = async (e) => {
//   e.preventDefault()

//   const strongParams = {
//     activity: {
//       activity: getActivity().value,
//     }

//   }

//   const kidsObj = await fetch(this.baseUrl + `childenrolls/${Childenroll.id}`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(strongParams)
//   })

//   const newChildenroll = await kidsObj.json();
//   const index = Activity.all.indexOf(Childenroll)
//   Activity.all[index] = new Activity(newChildenroll)
// }

const deleteActivity = async activity => {
    await fetch(ActivityService.baseUrl + '/activities/' + activity.id, {
      method: "DELETE"
    });
    Activity.all = Activity.all.filter(b => b.id !== activity.id);
    Activity.renderAll();
  }
  
  const editActivity = activity => {
    activityForm().removeEventListener('submit', Activity.createActivity);
    getTitle().value = activity.title;
    
    activityFormSubmit().value = 'update activity';
    formHeader().innerText = 'Edit Activity';
    updateActivity = updateActivity.bind(activity);
    activityForm().addEventListener('submit', updateActivity)
  }
  
  async function updateActivity(e) {
    e.preventDefault();
  
  
    const strongParams = {
      activity: {
        title: getTitle().value
        
      }
    }
  
    const response = await fetch(ActivityService.baseUrl + `/activities/${this.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(strongParams)
    })
  
    const newActivity = await response.json();
    const index = Activity.all.indexOf(this)
    Activity.all[index] = new Activity(newActivity)
  
    activityForm().removeEventListener('submit', updateActivity)
    formHeader().innerText = "Create Activity";
    getTitle().value = '';
    activityFormSubmit().value = "create activity";
    activityForm().addEventListener('submit', Activity.createActivity);
  
    Activity.renderAll();
  }

