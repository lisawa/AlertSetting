"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
    'ng2-bs3-modal': 'vendor/ng2-bs3-modal'
};

/** User packages configuration. */
const packages: any = {
    'ng2-bs3-modal': { main: 'ng2-bs3-modal.js', defaultExtension: 'js' },
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/topbar',
  'app/component/inkbutton',
  'app/action',
  'app/event',
  'app/task',
  'app/wip-setting',
  'app/sys-setting',
  'app/histroy',
  'app/history',
  'app/action/line-setting',
  'app/action/we-chat-setting',
  'app/action/mail-setting',
  'app/action/option-setting',
  'app/action/action-navigation',
  'app/event/event-setting',
  'app/event/check-setting',
  'app/event/event-template-list',
  'app/event/event-check-list',
  'app/task/task-check-list',
  'app/task/task-event-list',
  'app/task/task-setting',
  'app/task/event-setting',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
