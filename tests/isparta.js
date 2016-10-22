const testsContext = require.context('./', true, /\.js$/);
testsContext.keys().forEach(testsContext);

const componentsContext = require.context('../src/', true, /\.spec\.js$/);
componentsContext.keys().forEach(componentsContext);