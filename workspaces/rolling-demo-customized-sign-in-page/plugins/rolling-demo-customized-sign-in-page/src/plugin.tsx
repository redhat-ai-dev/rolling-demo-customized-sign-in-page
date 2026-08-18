/*
 * Copyright Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createFrontendModule } from '@backstage/frontend-plugin-api';
import { SignInPageBlueprint } from '@backstage/plugin-app-react';
import { RollingDemoCustomizedSignInPage } from './components';

const rollingDemoCustomizedSignInPage = SignInPageBlueprint.make({
  params: {
    loader: async () => RollingDemoCustomizedSignInPage,
  },
});

// SignInPageBlueprint is restricted to the `app` plugin, so this ships as a
// module targeting `pluginId: 'app'` rather than a plugin with its own id.
/**
 * New Frontend System module that installs the RHDH customized sign-in page
 * as the app's sign-in page.
 * @public
 */
export default createFrontendModule({
  pluginId: 'app',
  extensions: [rollingDemoCustomizedSignInPage],
});
