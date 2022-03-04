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


const deleteActivity = async activity => {
    await fetch(ActivityService.baseUrl + '/activities/' + activity.id, {
      method: "DELETE"
    });
    Activity.all = Activity.all.filter(b => b.id !== activity.id);
    Activity.renderAll();
  }

  const deleteChild = async childenroll => {
    await fetch(ActivityService.baseUrl + '/childenrolls/' + childenroll.id, {
      method: "DELETE"
    });
    Activity.all = Activity.all.filter(b => b.id !== childenroll.id);
    Activity.renderAll();
  }
  