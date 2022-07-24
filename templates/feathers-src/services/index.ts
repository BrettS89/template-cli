import { Application } from '../declarations';
import securityUser from './security/user/user.service';
import securityRole from './security/role/role.service';
import securitySession from './security/session/session.service';
import storageFile from './storage/file/file.service';
import dataTag from './data/tag/tag.service';
import testTest from './test/test/test.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(securityUser);
  app.configure(securityRole);
  app.configure(securitySession);
  app.configure(storageFile);
  app.configure(dataTag);
  app.configure(testTest);
}
