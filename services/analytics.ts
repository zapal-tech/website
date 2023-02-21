import { getAnalytics } from 'firebase/analytics';

import { app } from './firebase';

export const analytics = getAnalytics(app);
