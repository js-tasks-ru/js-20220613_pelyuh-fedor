export default class NotificationMessage {
  constructor(message, notificationParams) {
    this.message = message;
    this.notificationParams = {
      type: notificationParams.type ?? 'success',
      duration: notificationParams.duration ?? 1000
    };
  }


  get duration() {
    return this.notificationParams.duration;
  }


  notificationMessage() {
    const wrapper = document.createElement('div');
    wrapper.classList.add(`inner-wrapper`);

    const header = document.createElement('div');
    header.classList.add(`notification-header`);
    if (this.notificationParams.type === 'success') {
      header.textContent = 'success';
    }
    if (this.notificationParams.type === 'error') {
      header.textContent = 'error';
    }
    wrapper.append(header);

    const body = document.createElement('div');
    body.classList.add(`notification-body`);
    if (this.message) {
      body.textContent = this.message;
    }
    wrapper.append(body);

    return wrapper;
  }

  show() {
    const notificationBody = document.createElement('div');
    notificationBody.classList.add(`notification`);
    if (this.notificationParams.type === 'success') {
      notificationBody.classList.add(`success`);
    }
    if (this.notificationParams.type === 'error') {
      notificationBody.classList.add(`error`);
    }
    notificationBody.style = `--value: ${this.notificationParams.duration / 1000}s`;

    const timer = document.createElement('div');
    timer.classList.add(`timer`);
    notificationBody.append(timer);

    notificationBody.append(this.notificationMessage());

    if (!document.querySelector(`.notification.${this.notificationParams.type}`)) {
      document.body.append(notificationBody);
      setTimeout(()=>{
        document.body.removeChild(notificationBody)
      }, this.notificationParams.duration);
    }

  }

  get element() {}

  destroy() {}

}
