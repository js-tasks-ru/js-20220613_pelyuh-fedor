export default class ColumnChart {
  chartHeight = 50;
  constructor(columnData) {
    this.columnData = columnData;
    this.element = columnData;
  }


  createLabel () {
    const title = document.createElement('div');
    title.classList.add('column-chart__title');

    const link = document.createElement('a');
    link.classList.add('column-chart__link');
    link.textContent = 'View all';

    if (this.columnData) {
      if (this.columnData.label) {
        title.textContent = `Total ${this.columnData.label}`;
      }

      if (this.columnData.link) {
        link.href = `/${this.columnData.label}`;
      }

    }
    title.append(link);
    return title;
  }

  createContainer () {
    const container = document.createElement('div');
    container.classList.add('column-chart__container');

    const header = document.createElement('div');
    header.classList.add('column-chart__header');
    header.dataset.element = 'header';

    if (this.columnData && this.columnData.value) {
      header.textContent = this.columnData.value;
      if (this.columnData.formatHeading) {
        header.textContent = this.columnData.formatHeading(this.columnData.value);
      }
    }

    container.append(header);
    return container;

  }

  createData () {
    const container = this.createContainer();

    const chartBody = document.createElement('div');
    chartBody.classList.add('column-chart__chart');
    chartBody.dataset.element = 'body';

    if (this.columnData && this.columnData.data && this.columnData.data.length) {
      const maxValue = Math.max(...this.columnData.data);
      const scale = 50 / maxValue;
      this.columnData.data.map((dataItem) => {
        const dataDiv = document.createElement('div');
        dataDiv.dataset.tooltip = `${(dataItem / maxValue * 100).toFixed(0)}%`;
        dataDiv.style = `--value: ${Math.floor(dataItem * scale)}`;
        chartBody.append(dataDiv);
      });
    }

    container.append(chartBody);

    return container;
  }


  set element(columnData) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('column-chart');
    wrapper.style = `--chart-height: ${this.chartHeight}`;
    if (!this.columnData || !this.columnData.data || !this.columnData.data.length) {
      wrapper.classList.add('column-chart_loading');
    }

    wrapper.append(this.createLabel());
    wrapper.append(this.createData());


    this._element = wrapper;
  }

  get element() {
    return this._element;
  }

  update (newData) {
    this.data = newData;
  }

  remove() {
    this._element.parentNode.removeChild(this._element)
  }

  destroy() {

  }
}
