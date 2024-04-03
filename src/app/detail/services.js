import axiosInstance from '@/plugins/axios';
import BaseService from '@/services';

class ProductDetailService extends BaseService {

}
const productDetailService = new ProductDetailService({
  axiosInstance,
  urlOption: { prefix: '/products' },
});

export default productDetailService;
