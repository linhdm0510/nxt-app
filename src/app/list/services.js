import axiosInstance from '@/plugins/axios';
import BaseService from '@/services';

class ProductListService extends BaseService {

  async createProduct() {
    const url = `${this.url}/add`;
    return await this.axiosInstance.post(url);
  }
}
const productListService = new ProductListService({
  axiosInstance,
  urlOption: { prefix: '/products' },
});

export default productListService;
