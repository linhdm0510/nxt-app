import { configureStore } from '@reduxjs/toolkit';

import product from '@/app/list/slice';

export const store = configureStore({
  reducer: {
    product,
  },
});
