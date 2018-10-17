import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import('../../layouts/index.js'), loading: require('/home/dx/lhc/huachaoliu.github.io/src/components/loading/index').default  }),
    "routes": [
      {
        "path": "/about",
        "exact": true,
        "component": dynamic({ loader: () => import('../about/index.js'), loading: require('/home/dx/lhc/huachaoliu.github.io/src/components/loading/index').default  })
      },
      {
        "path": "/home",
        "exact": true,
        "component": dynamic({ loader: () => import('../home/index.js'), loading: require('/home/dx/lhc/huachaoliu.github.io/src/components/loading/index').default  })
      },
      {
        "path": "/home/:id",
        "exact": true,
        "component": dynamic({ loader: () => import('../home/$id.js'), loading: require('/home/dx/lhc/huachaoliu.github.io/src/components/loading/index').default  })
      },
      {
        "path": "/",
        "exact": true,
        "component": dynamic({ loader: () => import('../index.js'), loading: require('/home/dx/lhc/huachaoliu.github.io/src/components/loading/index').default  })
      },
      {
        "path": "/log",
        "exact": true,
        "component": dynamic({ loader: () => import('../log/index.js'), loading: require('/home/dx/lhc/huachaoliu.github.io/src/components/loading/index').default  })
      },
      {
        "path": "/type",
        "exact": true,
        "component": dynamic({ loader: () => import('../type/index.js'), loading: require('/home/dx/lhc/huachaoliu.github.io/src/components/loading/index').default  })
      },
      {
        "component": () => React.createElement(require('/home/dx/lhc/huachaoliu.github.io/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/home/dx/lhc/huachaoliu.github.io/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
