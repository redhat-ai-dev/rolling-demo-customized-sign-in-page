# @red-hat-developer-hub/backstage-plugin-rolling-demo-customized-sign-in-page

## 0.2.0

### Minor Changes

- Migrate the plugin to the New Frontend System. The sign-in page is now also available as an NFS extension (`SignInPageBlueprint`, registered via a `pluginId: 'app'` module) alongside the existing legacy `createPlugin` export, which remains available for backward compatibility.
