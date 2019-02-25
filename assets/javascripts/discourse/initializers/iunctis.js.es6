import DiscourseURL from 'discourse/lib/url';
import { ajax } from 'discourse/lib/ajax';
import { withPluginApi } from 'discourse/lib/plugin-api';

function initializeWithApi(api) {
  const UserRoute = api.container.lookupFactory("route:user");
  UserRoute.reopen({
    setupController(controller, user) {
      this._super(controller, user);
      controller.set('forceExpand', true);
    }
  });
}

export default {
  name: 'iunctis',
  initialize() {
    withPluginApi('0.5', initializeWithApi);
  }
};