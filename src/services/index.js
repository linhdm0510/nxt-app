export default class BaseService {
  urlOption = {
    prefix: '',
  };
  axiosInstance;
  constructor({
    urlOption,
    axiosInstance,
  }) {
    this.urlOption = urlOption;
    this.axiosInstance = axiosInstance;
  }

  get url() {
    return this.urlOption.prefix;
  }

  async getList(params) {
    return await this.axiosInstance.get(this.url, { params });
  }

  async getDetail(id) {
    const url = `${this.url}/${id}`;
    return await this.axiosInstance.get(url);
  }

  async create(data) {
    return await this.axiosInstance.post(this.url, data);
  }

  async update(id) {
    const url = `${this.url}/${id}`;
    return await this.axiosInstance.patch(url, data);
  }
}
