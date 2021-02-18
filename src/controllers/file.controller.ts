import { Storage, Bucket } from '@google-cloud/storage';

const storage = new Storage({ projectId: 'bamboo-almanac-305200' });
storage.getServiceAccount({}).then((res) => {
  console.log(res);
});
